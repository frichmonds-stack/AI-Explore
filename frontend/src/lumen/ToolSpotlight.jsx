import { Link } from 'react-router-dom';
import { StatusBadge } from './StatusBadge.jsx';
import { ArrowRight } from './ToolCard.jsx';

const CSS = `
.lmn-spot{
  position:sticky; top:76px; z-index:40;
  background:color-mix(in srgb, var(--surface-card) 94%, transparent);
  backdrop-filter:saturate(1.3) blur(8px); -webkit-backdrop-filter:saturate(1.3) blur(8px);
  border:1px solid var(--pine-200); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-lg);
  margin-bottom:var(--space-6);
  overflow:hidden;
}
.lmn-spot__bar{
  width:100%; display:flex; align-items:center; gap:var(--space-3);
  padding:var(--space-4) var(--space-5); text-align:left;
  background:transparent; border:none; cursor:pointer; font:inherit; color:inherit;
}
.lmn-spot__bar:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
.lmn-spot__logo{
  width:44px; height:44px; flex:none; border-radius:var(--radius-md);
  display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:20px;
  color:var(--pine-700); background:var(--pine-50); border:1px solid var(--pine-100); overflow:hidden;
}
.lmn-spot--open .lmn-spot__logo{ width:56px; height:56px; font-size:26px; }
.lmn-spot__logo img{ width:100%; height:100%; object-fit:cover; }
.lmn-spot__heading{ flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
.lmn-spot__eyebrow{
  font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-label);
  text-transform:uppercase; color:var(--pine-600); font-weight:var(--weight-medium);
}
.lmn-spot__name{
  font-family:var(--font-display); font-weight:var(--weight-semibold);
  font-size:var(--text-lg); line-height:1.1; color:var(--text-strong);
}
.lmn-spot--open .lmn-spot__name{ font-size:var(--text-xl); }
.lmn-spot__vendor{ font-family:var(--font-mono); font-size:var(--text-xs); color:var(--text-muted); }
.lmn-spot__right{ flex:none; display:flex; align-items:center; gap:var(--space-3); }
.lmn-spot__toggle{
  flex:none; width:30px; height:30px; border-radius:50%; border:1px solid var(--border-strong);
  background:var(--surface-card); color:var(--text-muted); display:flex; align-items:center; justify-content:center;
  transition:var(--transition-base);
}
.lmn-spot__bar:hover .lmn-spot__toggle{ border-color:var(--pine-300); color:var(--pine-700); }
.lmn-spot__toggle svg{ width:14px; height:14px; transition:transform var(--dur-base) var(--ease-out); }
.lmn-spot--open .lmn-spot__toggle svg{ transform:rotate(180deg); }

/* Collapsible body — 0fr/1fr grid trick animates to auto height with no jump. */
.lmn-spot__bodywrap{ display:grid; grid-template-rows:0fr; transition:grid-template-rows var(--dur-slow) var(--ease-out); }
.lmn-spot--open .lmn-spot__bodywrap{ grid-template-rows:1fr; }
.lmn-spot__bodyinner{ overflow:hidden; min-height:0; }
.lmn-spot__body{
  padding:0 var(--space-5) var(--space-5); display:flex; flex-direction:column; gap:var(--space-5);
}
.lmn-spot__lead{ font-size:var(--text-md); color:var(--text-body); line-height:var(--leading-relaxed); margin:0; }
.lmn-spot__section{ display:flex; flex-direction:column; gap:var(--space-2); }
.lmn-spot__why{
  font-size:var(--text-sm); color:var(--text-body); line-height:var(--leading-relaxed); margin:0;
  padding:var(--space-3) var(--space-4); background:var(--paper-50);
  border-left:3px solid var(--pine-200); border-radius:var(--radius-sm);
}
.lmn-spot__seclabel{
  font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-label);
  text-transform:uppercase; color:var(--text-muted); font-weight:var(--weight-medium);
}
.lmn-spot__links{ display:flex; flex-wrap:wrap; gap:var(--space-2); }
.lmn-spot__foot{
  display:flex; align-items:center; justify-content:space-between; gap:var(--space-3);
  border-top:1px solid var(--border-subtle); padding-top:var(--space-4);
}
.lmn-spot__guide{
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold);
  color:#fff; background:var(--pine-600); border-radius:var(--radius-pill);
  padding:.55em 1.15em; text-decoration:none; display:inline-flex; align-items:center; gap:.4em;
  white-space:nowrap; transition:var(--transition-base);
}
.lmn-spot__guide:hover{ background:var(--pine-700); text-decoration:none; color:#fff; transform:translateY(-1px); box-shadow:var(--shadow-pine); }
.lmn-spot__guide svg{ width:13px; height:13px; }
.lmn-spot__visit{ font-size:var(--text-sm); color:var(--text-muted); text-decoration:none; }
.lmn-spot__visit:hover{ color:var(--pine-700); }

@media (prefers-reduced-motion: reduce){
  .lmn-spot__bodywrap{ transition:none; }
  .lmn-spot__toggle svg{ transition:none; }
  .lmn-spot__logo, .lmn-spot__name{ transition:none; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-spot-css')) {
  const s = document.createElement('style'); s.id = 'lmn-spot-css'; s.textContent = CSS; document.head.appendChild(s);
}

const Chevron = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/**
 * ToolSpotlight — persistent, sticky detail panel for the selected tool.
 * `open` shows the full detail; minimised shows just the identity bar.
 * Clicking the bar toggles open. Tag links navigate to explainers.
 */
export function ToolSpotlight({ tool, meta, status, open, onToggle }) {
  if (!tool) return null;

  const uses = (tool.useCategories || []).map((id) => meta.useCategories.find((u) => u.id === id)).filter(Boolean);
  const peds = (tool.pedagogies || []).map((id) => meta.pedagogyFrameworks.find((p) => p.id === id)).filter(Boolean);
  const bodyId = `spot-body-${tool.id}`;

  return (
    <section
      className={['lmn-spot', open ? 'lmn-spot--open' : ''].filter(Boolean).join(' ')}
      role="region"
      aria-label="Selected tool"
    >
      <button type="button" className="lmn-spot__bar" aria-expanded={open} aria-controls={bodyId} onMouseDown={(e) => e.preventDefault()} onClick={onToggle}>
        <div className="lmn-spot__logo">
          {tool.logo ? <img src={tool.logo} alt="" /> : (tool.name ? tool.name.trim()[0] : '·')}
        </div>
        <div className="lmn-spot__heading">
          <span className="lmn-spot__eyebrow">In focus</span>
          <span className="lmn-spot__name">{tool.name}</span>
          {tool.vendor && <span className="lmn-spot__vendor">{tool.vendor}</span>}
        </div>
        <div className="lmn-spot__right">
          <StatusBadge status={status} showTip={false} />
          <span className="lmn-spot__toggle" aria-hidden="true"><Chevron /></span>
        </div>
      </button>

      <div className="lmn-spot__bodywrap">
        <div className="lmn-spot__bodyinner">
          <div className="lmn-spot__body" id={bodyId}>
            {tool.description && <p className="lmn-spot__lead">{tool.description}</p>}

            {tool.notes && (
              <div className="lmn-spot__section">
                <span className="lmn-spot__seclabel">Why it may be useful</span>
                <p className="lmn-spot__why">{tool.notes}</p>
              </div>
            )}

            {uses.length > 0 && (
              <div className="lmn-spot__section">
                <span className="lmn-spot__seclabel">Recommended uses</span>
                <div className="lmn-spot__links">
                  {uses.map((u) => <Link key={u.id} className="lmn-tool__use" to="/explainer/uses">{u.label}</Link>)}
                </div>
              </div>
            )}

            {(tool.roles || []).length > 0 && (
              <div className="lmn-spot__section">
                <span className="lmn-spot__seclabel">Relevant roles</span>
                <div className="lmn-spot__links">
                  {tool.roles.map((r) => <Link key={r} className="lmn-tool__rolepill" to="/explainer/roles">{r}</Link>)}
                </div>
              </div>
            )}

            {peds.length > 0 && (
              <div className="lmn-spot__section">
                <span className="lmn-spot__seclabel">Teaching approaches</span>
                <div className="lmn-spot__links">
                  {peds.map((p) => (
                    <Link key={p.id} className="lmn-tool__ped" to="/explainer/pedagogies" title={p.label}>
                      {p.shortLabel || p.label} <ArrowRight />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="lmn-spot__foot">
              <Link className="lmn-spot__guide" to={`/tools/${tool.id}`}>View full guide <ArrowRight /></Link>
              <a className="lmn-spot__visit" href={tool.url} target="_blank" rel="noopener noreferrer">Visit site ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
