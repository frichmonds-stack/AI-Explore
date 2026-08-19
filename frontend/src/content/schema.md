# Content Schema

Each content file is a JSON object representing a **track** (a top-level learning area).

## Track

```json
{
  "id": "string",          // matches the route segment (e.g. "foundations")
  "title": "string",       // display title
  "description": "string", // shown on the track landing page
  "sections": [Section]
}
```

## Section

```json
{
  "id": "string",          // used in URL (e.g. "what-is-ai")
  "title": "string",
  "summary": "string",     // one-line description shown in the section list
  "tags": ["string"],      // optional: badge labels shown on track page
  "blocks": [Block]
}
```

## Block types

### text
```json
{ "type": "text", "content": "string" }
```

### heading
```json
{ "type": "heading", "content": "string" }
```

### list
```json
{ "type": "list", "items": ["string"] }
```

### risk
Renders as a prominent warning callout (DaisyUI alert-warning).
```json
{ "type": "risk", "title": "string", "content": "string" }
```

### pedagogy
Renders as an info callout linking to teaching theory (DaisyUI alert-info).
```json
{ "type": "pedagogy", "title": "string", "content": "string" }
```

### quote
```json
{ "type": "quote", "content": "string", "source": "string (optional)" }
```

### callout
Neutral callout box for notes, tips, or framing (DaisyUI alert-neutral).
```json
{ "type": "callout", "title": "string (optional)", "content": "string" }
```

---

# Guides (`guides.json`)

Guides are the **work-first** content type — short, task-shaped walkthroughs rendered by `GuidesPage` (hub) and `GuidePage` (detail). They reuse the taxonomy in `tools.json` (`useCategories`, `pedagogyFrameworks`, `roles`, `bands`, `subjects`) so there is one source of truth; only `difficulties` is guide-specific and lives in `guides.json` `meta`.

```json
{
  "id": "string",              // route segment, e.g. "differentiate-a-reading-task"
  "title": "string",
  "summary": "string",         // one line, shown on cards
  "useCategory": "string",     // ONE useCategories id from tools.json (the job)
  "roles": ["string"],         // role labels from tools.json meta.roles
  "bands": ["string"],         // band ids from tools.json meta.bands
  "subjects": ["string"],
  "time": "string",            // e.g. "10 minutes"
  "difficulty": "string",      // a difficulties id: starter | confident | advanced
  "tools": ["string"],         // tools.json ids — rendered with their approval badge (when enabled)
  "pedagogies": ["string"],    // pedagogyFrameworks ids
  "featured": true,            // surfaces in the "Start here" rail + homepage
  "outcome": "string",         // what the teacher ends up with
  "concept": { "label": "string", "trackId": "string", "sectionId": "string" }, // links to a Foundations section
  "steps": [
    { "title": "string", "detail": "string", "prompt": "string (optional, copy-paste)", "tip": "string (optional)" }
  ],
  "safety": { "title": "string", "content": "string" },        // MANDATORY — child-safety-first block
  "pedagogyNote": { "framework": "string", "content": "string" }, // framework = a pedagogyFrameworks id
  "verify": ["string"],        // "check before you use it" checklist
  "next": ["string"]           // related guide ids — the "Explore next" rail (missing ids are filtered out)
}
```

**Conventions**
- `safety` is required on every guide — it's the child-safety-first commitment made concrete. Don't author a guide without it.
- `tools` ids must exist in `tools.json`; the guide inherits each tool's approval badge (hidden while the approval layer is off — see `config.js`).
- `next` ids that don't resolve are silently dropped, so it's safe to reference guides not yet written.
- One `useCategory` per guide (the primary job); use `roles`/`pedagogies` arrays for breadth.

---

# The review data model (`tasks.json` · `scores.json` · `reviews.json`)

Three new files joined to `tools.json` by id. They hold the **tool review** — the
delivery rubric's scores, the evidence behind them, and the owner's prose take.

Spec and the 19 rulings behind these shapes: `.claude/tool-review-architecture.md`
→ "The review data model". This section is the content-model rules only; the
reasoning stays in that file.

**Storage is split; the page is not.** A score belongs to a *tool and a task at
once*, so it can't live inside either. Splitting it means the same data can be
cut by tool (the tool page) or by task (a comparison across tools on one job).

All joins, group-bys and derived numbers live in
[`lib/scores.js`](../lib/scores.js) — never in a page.

## `tasks.json` — the educational job

```json
{
  "id": "y7-fractions-worksheet",   // stable across versions
  "version": 1,                     // bump when the prompt changes
  "name": "Year 7 adding fractions worksheet",
  "useContext": "printed practice sheet for a Year 7 maths class",
  "prompt": "the canonical single-shot prompt"
}
```

- A task is **an educational job in a use context**, never a media type. Half the
  rubric (`Format`, `Craft`) can't be scored without the context, so
  `useContext` is required, not decoration.
- **A different prompt is a different task** — but version it, keep the `id`
  stable. A `…-v2` id fragments group-by-task, which is the whole point of the split.

## `scores.json` — one row per artefact, per occasion

`meta` holds the rubric itself (three buckets → seven criteria, plus the overall
bands) so no component hardcodes a criterion label. `scores` is a flat array.

```json
{
  "toolId": "chatgpt", "taskId": "y7-fractions-worksheet", "taskVersion": 1,
  "vendor": "OpenAI", "model": "Sol", "effort": "high",
  "date": "2026-07-26",
  "evidence": "/evidence/y7-fractions-worksheet/chatgpt-sol-high-2026-07-26.pdf",
  "brief": 3, "purpose": 2, "polish": 3, "format": 2,
  "coverage": null, "truth": null, "craft": null,
  "notes": { "purpose": "the worked examples are the answers to Q1, 5 and 9" }
}
```

**A criterion value is one of three things:**

| Value | Means | Effect |
|---|---|---|
| a number | a real judgement on the scale | counts toward the bucket mean |
| `null` | **not scored** — no scale exists yet, or nobody has looked | blocks the overall; **blocks publication** |
| `"n/a"` | the criterion has **no face** on this artefact type | drops out of the bucket mean |

`null` is **not a zero.** A zero is a real judgement at the floor of a scale
(`Coverage` 0 = wrong content). An unscored criterion is blank, not bad.

`"n/a"` is the rubric's only weighting lever. Reserve it for a criterion with no
face at all on that artefact type — never one that merely matters less.

**Other rules**
- **Store the seven; derive the overall.** Nothing persists a total. The
  aggregation rule is young and `Brief` currently caps at 3, so a stored total
  would become a lie in every historical row the moment either changes.
- **History survives — never overwrite a row.** A score is a claim about one
  artefact from one model version on one date. `latestScoresForTool` surfaces the
  most recent per task; the old rows are what make "2.1 → 3.4 in eight months"
  readable later.
- `vendor` / `model` / `effort` are **point-in-time fields**, deliberately
  duplicated rather than derived — a rebrand would otherwise silently
  re-attribute every historical row.
- Evidence files are committed to `frontend/public/evidence/` and served
  statically; the row holds the path.
- **`notes` are stored but NOT rendered** (private for now). They are committed
  to git, so this holds only while the repo is private — revisit before it is
  ever made public. No minimum, no maximum, dot points fine.

## `reviews.json` — the tool layer

```json
{
  "toolId": "chatgpt", "lastUpdated": "2026-07-26",
  "recommended": true,
  "body": [ /* the standard block schema above: text · heading · list · quote · callout */ ]
}
```

- The body **reuses the block schema** at the top of this file — `SectionBlock`
  already renders it, `prose` styling is already wired.
- Reviews carry `lastUpdated` but are **not versioned**. A score is a
  measurement (overwriting destroys evidence); a review is editorial (rewriting
  it is keeping it honest).
- The recommendation is **binary and positive-only**: `true`, or no badge.
  Absence is not an accusation.

## `tools.json` — one new field

```json
{ "id": "chatgpt", "applicableTasks": ["y7-fractions-worksheet"] }
```

The tasks this tool is expected to be reviewed on. **Declared, not inferred** —
without a stored list, "fully reviewed" is decided by whoever last looked, so the
gate could be met by forgetting a task rather than doing one. Editable downward
without shame. All 27 tools currently declare `[]`.

## The publication gate

**Nothing renders until a tool is FULLY reviewed. Entry is not publication.**
Scores and PDFs can land in these files with no page changing — which is how the
pilot data gets off a Desktop and into the repo before any of it is publishable.

`isFullyReviewed(toolId)` requires **all three**:
1. the tool declares at least one task in `applicableTasks`;
2. every declared task has a score row with **no `null` criteria**;
3. a `reviews.json` entry exists with a non-empty `body`.

⚠️ **Consequence worth knowing:** the three Substance criteria have no scales
written yet, so they enter as `null` — which means **no tool can publish until
those scales exist.** That is the gate working as ruled, not a bug.
