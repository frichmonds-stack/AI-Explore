/**
 * scores.js — the resolver for the review data model.
 *
 * Four files joined by id (spec: `.claude/tool-review-architecture.md` → "The
 * review data model", 2026-08-11): `tools.json` (+ `applicableTasks`),
 * `tasks.json`, `scores.json`, `reviews.json`. Storage is split so the same
 * data can be cut by tool *or* by task; the page is not split.
 *
 * Every join, group-by and derived number lives here — pages never do it
 * (CLAUDE.md reuse-first rule).
 *
 * Two rulings this file exists to enforce:
 *  - Ruling 3: store the seven sub-criteria, DERIVE the overall. Nothing
 *    persists a total, so the aggregation rule can change without making every
 *    historical row a lie.
 *  - Ruling 14/18: nothing publishes until a tool is FULLY reviewed. Entry is
 *    not publication — data and PDFs can land without anything rendering.
 */

import toolsData from '../content/tools.json';
import tasksData from '../content/tasks.json';
import scoresData from '../content/scores.json';
import reviewsData from '../content/reviews.json';

const { tools } = toolsData;
const { tasks } = tasksData;
const { meta, scores } = scoresData;
const { reviews } = reviewsData;

export const buckets = meta.buckets;

/** The seven criteria, flattened, in bucket order. */
export const criteria = buckets.flatMap((b) =>
  b.criteria.map((c) => ({ ...c, bucketId: b.id, bucketLabel: b.label })),
);

export const criterionById = (id) => criteria.find((c) => c.id === id);
export const taskById = (id) => tasks.find((t) => t.id === id);
export const toolById = (id) => tools.find((t) => t.id === id);

/**
 * A criterion value is one of three things:
 *   a number  — a real judgement on the scale
 *   null      — NOT SCORED (no scale exists yet, or nobody has looked). Blank,
 *               not bad. Never treat it as a zero: a zero is a real judgement
 *               at the floor of a scale (Coverage 0 = wrong content).
 *   'n/a'     — the criterion has NO FACE on this artefact type. The rubric's
 *               only weighting lever; an N/A criterion drops out of its
 *               bucket's mean rather than blocking it.
 */
const isScored = (v) => typeof v === 'number';
const isNotApplicable = (v) => v === 'n/a';
const isMissing = (v) => !isScored(v) && !isNotApplicable(v);

const mean = (nums) => (nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : null);

/** Mean of one bucket's scored criteria on one row. `null` if none are scored. */
export function bucketMean(score, bucketId) {
  const b = buckets.find((x) => x.id === bucketId);
  if (!b) return null;
  return mean(b.criteria.map((c) => score[c.id]).filter(isScored));
}

/** Is every criterion on this row either scored or explicitly N/A? */
export function isComplete(score) {
  return criteria.every((c) => !isMissing(score[c.id]));
}

/**
 * The overall for one artefact: mean of the three bucket means (ruling 16 +
 * the 07-29 two-level rule — NOT a flat mean across seven criteria, which
 * would hand Substance's criterion count 43% of the score).
 *
 * Returns `null` on an incomplete row. A partial mean is a number that looks
 * like a verdict and isn't one.
 */
export function overallFor(score) {
  if (!isComplete(score)) return null;
  return mean(buckets.map((b) => bucketMean(score, b.id)).filter((v) => v !== null));
}

/** The owner-authored bands. `min` is inclusive; the 0–1 label is UNRULED. */
export function bandFor(value) {
  if (value === null || value === undefined) return null;
  return meta.bands.find((b) => value >= b.min) || null;
}

/** Round for display only — never store what this returns (ruling 3). */
export const formatScore = (v) => (v === null || v === undefined ? null : v.toFixed(1));

// ---------------------------------------------------------------- group-bys

export const scoresForTool = (toolId) => scores.filter((s) => s.toolId === toolId);
export const scoresForTask = (taskId) => scores.filter((s) => s.taskId === taskId);

/**
 * History survives and is never overwritten (ruling 4) — so a tool may hold
 * several rows for one task, from different model versions on different dates.
 * The card and the results overview surface the most recent per task; the
 * older rows stay in the file and are what makes "2.1 → 3.4 in eight months"
 * readable later.
 */
export function latestScoresForTool(toolId) {
  const byTask = new Map();
  for (const s of scoresForTool(toolId)) {
    const held = byTask.get(s.taskId);
    if (!held || (s.date || '') > (held.date || '')) byTask.set(s.taskId, s);
  }
  return [...byTask.values()];
}

/** Every row for one tool+task, newest first — the history view. */
export function historyFor(toolId, taskId) {
  return scoresForTool(toolId)
    .filter((s) => s.taskId === taskId)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

// ------------------------------------------------------------------ the tool

export const reviewFor = (toolId) => reviews.find((r) => r.toolId === toolId) || null;

/**
 * Honest coverage: how many of the tool's DECLARED applicable tasks have a
 * complete score (ruling 18). Without a declared list, "fully reviewed" is
 * decided by whoever last looked — so an empty list means nothing is claimed,
 * and therefore nothing publishes.
 */
export function coverageFor(toolId) {
  const declared = toolById(toolId)?.applicableTasks || [];
  const done = latestScoresForTool(toolId).filter(isComplete).map((s) => s.taskId);
  return {
    total: declared.length,
    scored: declared.filter((id) => done.includes(id)).length,
    declared,
    missing: declared.filter((id) => !done.includes(id)),
  };
}

/**
 * THE PUBLICATION GATE (rulings 14 + 18). Nothing about a tool's review
 * renders until: it declares at least one applicable task, every declared task
 * has a complete score, and the prose review exists. No partial fronts, no
 * "3 of 5 tasks scored" front page.
 */
export function isFullyReviewed(toolId) {
  const { total, scored } = coverageFor(toolId);
  if (total === 0 || scored < total) return false;
  const review = reviewFor(toolId);
  return Boolean(review && review.body && review.body.length);
}

/**
 * The tool's overall = the mean of its per-task overalls (ruling 16; that
 * "mean" means mean-across-tasks is the agent's reading, recorded as such in
 * the spec's sub-rulings). Gated — an ungated number would leak an unpublished
 * review onto a card.
 */
export function toolOverall(toolId) {
  if (!isFullyReviewed(toolId)) return null;
  return mean(latestScoresForTool(toolId).map(overallFor).filter((v) => v !== null));
}

/**
 * Everything a tool page needs, in the ruled display order (ruling 17):
 * scores overview → prose review → task outputs, organised BY TASK with the
 * criteria nested inside.
 *
 * Note: `notes` are carried through but must NOT be rendered — ruling 11 keeps
 * them private for now. They travel here so the slot exists, not so it shows.
 */
export function toolResults(toolId) {
  if (!isFullyReviewed(toolId)) return null;
  const rows = latestScoresForTool(toolId);
  return {
    overall: toolOverall(toolId),
    band: bandFor(toolOverall(toolId)),
    coverage: coverageFor(toolId),
    review: reviewFor(toolId),
    tasks: rows
      .map((score) => ({
        score,
        task: taskById(score.taskId),
        overall: overallFor(score),
        band: bandFor(overallFor(score)),
        buckets: buckets.map((b) => ({
          ...b,
          mean: bucketMean(score, b.id),
          criteria: b.criteria.map((c) => ({ ...c, value: score[c.id] })),
        })),
      }))
      .sort((a, b) => (a.task?.name || '').localeCompare(b.task?.name || '')),
  };
}
