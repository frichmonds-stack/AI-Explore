import SectionBlock from '../components/SectionBlock';
import { toolResults, formatScore } from '../lib/scores';

/**
 * ToolResults — the review results block on a tool page.
 *
 * Renders in the ruled order (tool-review-architecture.md ruling 17):
 *   scores overview → prose review → task outputs, BY TASK with criteria nested.
 *
 * It renders NOTHING unless the tool is fully reviewed (rulings 14 + 18) — the
 * gate lives in `lib/scores.js`, so this component's only job is layout.
 *
 * Deliberately absent: per-criterion notes. They are stored on the score row
 * and stay unrendered (ruling 11 — private for now). Don't design a slot for
 * something that isn't there.
 */

const CSS = `
.lmn-res{ display:flex; flex-direction:column; gap:var(--space-6); }

.lmn-res__overall{
  display:flex; align-items:baseline; gap:var(--space-3); flex-wrap:wrap;
  padding:var(--space-5); background:var(--pine-50);
  border:1px solid var(--pine-100); border-radius:var(--radius-md);
}
.lmn-res__num{
  font-family:var(--font-display); font-size:var(--text-3xl); line-height:1;
  font-weight:var(--weight-semibold); color:var(--pine-800);
}
.lmn-res__outof{ font-family:var(--font-mono); font-size:var(--text-sm); color:var(--text-muted); }
.lmn-res__band{
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold);
  color:var(--pine-800);
}
.lmn-res__coverage{
  flex-basis:100%; font-size:var(--text-sm); color:var(--text-muted); margin:0;
}

.lmn-res__task{
  display:flex; flex-direction:column; gap:var(--space-4);
  padding:var(--space-5); background:var(--surface-card);
  border:1px solid var(--border-subtle); border-radius:var(--radius-md);
}
.lmn-res__taskhead{ display:flex; align-items:flex-start; justify-content:space-between; gap:var(--space-4); }
.lmn-res__taskname{
  font-family:var(--font-display); font-size:var(--text-lg); font-weight:var(--weight-semibold);
  color:var(--text-strong); margin:0 0 2px;
}
.lmn-res__context{ font-size:var(--text-sm); color:var(--text-muted); margin:0; }
.lmn-res__tasknum{
  font-family:var(--font-display); font-size:var(--text-xl); font-weight:var(--weight-semibold);
  color:var(--pine-700); flex:none;
}

.lmn-res__run{
  font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:.04em;
  color:var(--text-muted); display:flex; flex-wrap:wrap; gap:var(--space-3);
}
.lmn-res__run a{ color:var(--pine-600); }

.lmn-res__bucket{ display:flex; flex-direction:column; gap:var(--space-2); }
.lmn-res__buckethead{
  display:flex; align-items:baseline; justify-content:space-between; gap:var(--space-3);
  padding-bottom:var(--space-2); border-bottom:1px solid var(--border-subtle);
}
.lmn-res__bucketname{
  font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-label);
  text-transform:uppercase; color:var(--pine-700); font-weight:var(--weight-medium);
}
.lmn-res__bucketmean{ font-size:var(--text-sm); color:var(--text-muted); font-family:var(--font-mono); }

.lmn-res__crit{
  display:flex; align-items:baseline; justify-content:space-between; gap:var(--space-3);
  font-size:var(--text-sm); padding:.25em 0;
}
.lmn-res__critname{ color:var(--text-body); }
.lmn-res__critq{ color:var(--text-muted); }
.lmn-res__critval{ font-family:var(--font-mono); font-weight:var(--weight-semibold); color:var(--text-strong); flex:none; }
.lmn-res__critval--na{ font-weight:var(--weight-medium); color:var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-res-css')) {
  const s = document.createElement('style'); s.id = 'lmn-res-css'; s.textContent = CSS; document.head.appendChild(s);
}

function CriterionRow({ criterion }) {
  const na = criterion.value === 'n/a';
  return (
    <div className="lmn-res__crit">
      <span className="lmn-res__critname">
        {criterion.label} <span className="lmn-res__critq">— {criterion.question}</span>
      </span>
      <span className={['lmn-res__critval', na ? 'lmn-res__critval--na' : ''].filter(Boolean).join(' ')}>
        {na ? 'n/a' : `${criterion.value} / ${criterion.max}`}
      </span>
    </div>
  );
}

/** The scores overview — sits in the page header, above the prose review. */
export function ToolScoresOverview({ toolId }) {
  const results = toolResults(toolId);
  if (!results) return null;
  const { overall, band, coverage } = results;

  return (
    <div className="lmn-res__overall">
      <span className="lmn-res__num">{formatScore(overall)}</span>
      <span className="lmn-res__outof">out of 4</span>
      {band && <span className="lmn-res__band">{band.label}</span>}
      <p className="lmn-res__coverage">
        Across {coverage.scored} {coverage.scored === 1 ? 'task' : 'tasks'} we asked this tool to do.
        Each score comes from one output you can open and check yourself.
      </p>
    </div>
  );
}

/** The prose review + the per-task results. */
export function ToolResultsBody({ toolId }) {
  const results = toolResults(toolId);
  if (!results) return null;

  return (
    <div className="lmn-res">
      {results.review?.body?.length > 0 && (
        <div className="prose">
          {results.review.body.map((block, i) => <SectionBlock key={i} block={block} />)}
        </div>
      )}

      {results.tasks.map(({ task, score, overall, buckets }) => (
        <article className="lmn-res__task" key={`${score.taskId}-${score.date}`}>
          <div className="lmn-res__taskhead">
            <div>
              <h3 className="lmn-res__taskname">{task?.name || score.taskId}</h3>
              {task?.useContext && <p className="lmn-res__context">{task.useContext}</p>}
            </div>
            <span className="lmn-res__tasknum">{formatScore(overall)}</span>
          </div>

          <div className="lmn-res__run">
            <span>{[score.vendor, score.model, score.effort].filter(Boolean).join(' · ')}</span>
            {score.date && <span>{score.date}</span>}
            {score.taskVersion && <span>prompt v{score.taskVersion}</span>}
            {score.evidence && (
              <a href={score.evidence} target="_blank" rel="noopener noreferrer">See the output ↗</a>
            )}
          </div>

          {buckets.map((bucket) => (
            <div className="lmn-res__bucket" key={bucket.id}>
              <div className="lmn-res__buckethead">
                <span className="lmn-res__bucketname">{bucket.label}</span>
                <span className="lmn-res__bucketmean">{formatScore(bucket.mean)}</span>
              </div>
              {bucket.criteria.map((c) => <CriterionRow key={c.id} criterion={c} />)}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
