import React from 'react';
import { Link } from 'react-router-dom';
import { StatusBadge } from './StatusBadge.jsx';

const CSS = `
.lmn-tool{
  position:relative; display:flex; flex-direction:column;
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-sm);
  height:100%; transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.lmn-tool--selected{
  border-color:var(--pine-400);
  box-shadow:0 0 0 1px var(--pine-300), var(--shadow-md);
}

/* A stretched button behind the content opens the quick preview. Content sits
   above it; only the title and tags are independently clickable (they navigate),
   everything else falls through to this surface. */
.lmn-tool__select{
  position:absolute; inset:0; width:100%; height:100%;
  appearance:none; -webkit-appearance:none; background:transparent; border:none;
  cursor:pointer; z-index:0; border-radius:var(--radius-lg);
}
.lmn-tool__select:focus-visible{ outline:none; box-shadow:var(--ring-focus); }

.lmn-tool__body{
  position:relative; z-index:1; pointer-events:none;
  display:flex; flex-direction:column; gap:var(--space-3); padding:var(--space-5);
}

.lmn-tool__head{ display:flex; align-items:flex-start; gap:var(--space-3); }
.lmn-tool__logo{
  width:48px; height:48px; flex:none; border-radius:var(--radius-md);
  display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:22px;
  color:var(--pine-700); background:var(--pine-50); border:1px solid var(--pine-100);
  overflow:hidden;
}
.lmn-tool__logo img{ width:100%; height:100%; object-fit:cover; }
.lmn-tool__titles{ flex:1; min-width:0; }

/* Title is a real link to the tool page, with a clear at-rest + hover affordance. */
.lmn-tool__name{
  pointer-events:auto; display:inline-flex; align-items:center; gap:.3em;
  font-family:var(--font-display); font-weight:var(--weight-semibold);
  font-size:var(--text-lg); line-height:1.15; color:var(--text-strong); cursor:pointer;
  text-decoration:none; text-underline-offset:3px; text-decoration-thickness:1px;
  transition:color var(--dur-base) var(--ease-out);
}
.lmn-tool__name:hover{ color:var(--pine-700); text-decoration:underline; text-decoration-color:var(--pine-400); }
.lmn-tool__name svg{ width:12px; height:12px; flex:none; opacity:.45; transition:opacity var(--dur-base), transform var(--dur-base); }
.lmn-tool__name:hover svg{ opacity:1; transform:translate(1px,-1px); }

.lmn-tool__vendor{
  font-size:var(--text-xs); color:var(--text-muted); margin-top:3px;
  font-family:var(--font-mono); letter-spacing:.04em;
}
/* Status: deliberately secondary — small, top-aligned, label not colour-only. */
.lmn-tool__status{ flex:none; margin-top:2px; }
.lmn-tool__status .lmn-status__pill{ font-size:var(--text-2xs); padding:.34em .6em; }

.lmn-tool__synopsis{
  font-size:var(--text-sm); color:var(--text-body); line-height:var(--leading-relaxed); margin:0;
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
}
.lmn-tool__cue{
  font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-label);
  text-transform:uppercase; color:var(--pine-600); font-weight:var(--weight-medium);
  display:inline-flex; align-items:center; gap:.45em; opacity:.7;
  transition:opacity var(--dur-base), transform var(--dur-base);
}
.lmn-tool:hover .lmn-tool__cue{ opacity:1; transform:translateX(2px); }
.lmn-tool__cue svg{ width:11px; height:11px; }
.lmn-tool__cue--selected{ color:var(--pine-700); opacity:1; }
.lmn-tool__cuedot{ width:.5em; height:.5em; border-radius:50%; background:var(--pine-500); }

/* Three fixed tag slots: use (filled) -> role (outline) -> pedagogy (link). */
.lmn-tool__tags{
  position:relative; z-index:1;
  display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-2);
  padding:0 var(--space-5) var(--space-5);
}
.lmn-tool__use{
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-semibold);
  color:#fff; background:var(--pine-600); border:1px solid var(--pine-600);
  border-radius:var(--radius-pill); padding:.34em .8em; text-decoration:none; white-space:nowrap;
  transition:var(--transition-base);
}
.lmn-tool__use:hover{ background:var(--pine-700); border-color:var(--pine-700); text-decoration:none; color:#fff; }
.lmn-tool__rolepill{
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-medium);
  color:var(--text-muted); background:transparent; border:1px solid var(--border-strong);
  border-radius:var(--radius-pill); padding:.34em .8em; text-decoration:none; white-space:nowrap;
  transition:var(--transition-base);
}
.lmn-tool__rolepill:hover{ border-color:var(--pine-300); color:var(--pine-700); text-decoration:none; }
.lmn-tool__ped{
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-medium);
  color:var(--pine-700); text-decoration:none; white-space:nowrap;
  display:inline-flex; align-items:center; gap:.25em; padding:.34em .2em;
}
.lmn-tool__ped:hover{ text-decoration:underline; color:var(--pine-800); }
.lmn-tool__ped svg{ width:11px; height:11px; opacity:.7; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tool-css')) {
  const s = document.createElement('style'); s.id = 'lmn-tool-css'; s.textContent = CSS; document.head.appendChild(s);
}

export const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* Diagonal arrow — signals "open the full tool page". */
const ArrowUpRight = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11l6-6M6 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* Resolve the strongest (placeholder: first authored) tag in each category. */
export function primaryTags(tool, meta) {
  const useId = (tool.useCategories || [])[0];
  const pedId = (tool.pedagogies || [])[0];
  return {
    useCat: useId && meta.useCategories.find((u) => u.id === useId),
    role: (tool.roles || [])[0],
    ped: pedId && meta.pedagogyFrameworks.find((p) => p.id === pedId),
  };
}

/**
 * ToolCard — calm, scannable selector. The card surface opens a quick preview
 * (spotlight) above the grid; the tool name is a direct link to the full tool
 * page; tags link to their explainers. Three independent click targets, no nesting.
 */
export function ToolCard({ tool, meta, status, selected = false, onSelect }) {
  const { useCat, role, ped } = primaryTags(tool, meta);

  return (
    <article className={['lmn-tool', selected ? 'lmn-tool--selected' : ''].filter(Boolean).join(' ')}>
      <button
        type="button"
        className="lmn-tool__select"
        aria-pressed={selected}
        aria-label={`Quick preview of ${tool.name}`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={onSelect}
      />

      <div className="lmn-tool__body">
        <div className="lmn-tool__head">
          <div className="lmn-tool__logo">
            {tool.logo ? <img src={tool.logo} alt="" /> : (tool.name ? tool.name.trim()[0] : '·')}
          </div>
          <div className="lmn-tool__titles">
            <Link className="lmn-tool__name" to={`/tools/${tool.id}`} title={`Open the ${tool.name} page`}>
              {tool.name} <ArrowUpRight />
            </Link>
            {tool.vendor && <div className="lmn-tool__vendor">{tool.vendor}</div>}
          </div>
          <span className="lmn-tool__status">
            <StatusBadge status={status} showTip={false} />
          </span>
        </div>

        {tool.description && <p className="lmn-tool__synopsis">{tool.description}</p>}

        {selected ? (
          <span className="lmn-tool__cue lmn-tool__cue--selected"><span className="lmn-tool__cuedot" /> Previewing</span>
        ) : (
          <span className="lmn-tool__cue">Quick preview <ArrowRight /></span>
        )}
      </div>

      {(useCat || role || ped) && (
        <div className="lmn-tool__tags">
          {useCat && (
            <Link className="lmn-tool__use" to="/explainer/uses" title={`Use category: ${useCat.label}`}>
              {useCat.label}
            </Link>
          )}
          {role && (
            <Link className="lmn-tool__rolepill" to="/explainer/roles" title={`Teaching role: ${role}`}>
              {role}
            </Link>
          )}
          {ped && (
            <Link className="lmn-tool__ped" to="/explainer/pedagogies" title={ped.label} aria-label={`Teaching approach: ${ped.label}`}>
              {ped.shortLabel || ped.label} <ArrowRight />
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
