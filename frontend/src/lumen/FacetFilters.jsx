import { useState, useEffect, useRef } from 'react';
import { facetHint, termDef } from '../lib/definitions';
import './InfoTip'; // side-effect: injects the .lmn-infotip tooltip CSS used below

/*
 * FacetFilters — a compact, single-row filter bar.
 *
 * Replaces stacked rows of pills with one wrapping row of dropdowns: options
 * stay hidden until a facet is opened (calm, not overwhelming), and the chosen
 * value is shown on the button itself so active filters are visible at a glance.
 * Single-select per facet; the sentinel 'all' means "no filter on this facet".
 */

const CSS = `
.lmn-facets{ display:flex; flex-direction:column; gap:var(--space-3); }
.lmn-facets__bar{ display:flex; flex-wrap:wrap; gap:var(--space-2); align-items:center; }
.lmn-facet{ position:relative; }
.lmn-facet__btn{
  display:inline-flex; align-items:center; gap:.5em;
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-medium);
  padding:.45em .9em; border-radius:var(--radius-pill); border:1px solid var(--border-strong);
  background:var(--surface-card); color:var(--text-body); cursor:pointer;
  transition:var(--transition-base); white-space:nowrap; max-width:240px;
}
.lmn-facet__btn:hover{ border-color:var(--pine-300); }
.lmn-facet__btn:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
.lmn-facet__btn.is-open{ border-color:var(--pine-400); box-shadow:0 0 0 1px var(--pine-200); }
.lmn-facet__btn.is-active{ background:var(--pine-600); border-color:var(--pine-600); color:#fff; }
.lmn-facet__txt{ overflow:hidden; text-overflow:ellipsis; }
.lmn-facet__chev{ font-size:.8em; opacity:.7; flex:none; }
.lmn-facet__menu{
  position:absolute; top:calc(100% + 6px); left:0; z-index:40;
  min-width:210px; max-height:320px; overflow-y:auto;
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-md); box-shadow:var(--shadow-lg); padding:var(--space-2);
  display:flex; flex-direction:column; gap:2px;
}
.lmn-facet__opt{
  text-align:left; font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-body);
  background:transparent; border:none; cursor:pointer; padding:.5em .65em; border-radius:var(--radius-sm);
  transition:var(--transition-base); line-height:1.3;
}
.lmn-facet__opt:hover{ background:var(--pine-50); color:var(--pine-700); }
.lmn-facet__opt.is-sel{ background:var(--pine-50); color:var(--pine-700); font-weight:var(--weight-semibold); }
.lmn-facet__opt--reset{ color:var(--text-muted); border-bottom:1px solid var(--border-subtle); border-radius:0; margin-bottom:2px; padding-bottom:.55em; }
.lmn-facet__clear{
  font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-muted);
  background:none; border:none; cursor:pointer; padding:.45em .5em; margin-left:auto;
}
.lmn-facet__clear:hover{ color:var(--pine-700); }
.lmn-facets__count{ font-size:var(--text-sm); color:var(--text-muted); margin:0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-facets-css')) {
  const s = document.createElement('style'); s.id = 'lmn-facets-css'; s.textContent = CSS; document.head.appendChild(s);
}

const ALL = 'all';

export function FacetFilters({ facets, values, onChange, onClear, resultCount, resultNoun = 'result' }) {
  const [openKey, setOpenKey] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!openKey) return;
    const onDoc = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpenKey(null); };
    const onKey = (e) => { if (e.key === 'Escape') setOpenKey(null); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [openKey]);

  const activeCount = facets.filter((f) => (values[f.key] || ALL) !== ALL).length;

  return (
    <div ref={rootRef} className="lmn-facets">
      <div className="lmn-facets__bar">
        {facets.map((f) => {
          const val = values[f.key] || ALL;
          const active = val !== ALL;
          const selLabel = active ? (f.options.find((o) => o.id === val)?.label || val) : f.label;
          const open = openKey === f.key;
          // Contextual hint: the selected term's definition once active, else
          // the category's own definition. Hidden while the menu is open.
          const tip = active ? termDef(f.key, val) : facetHint(f.key);
          return (
            <div className="lmn-facet" key={f.key}>
              <span className="lmn-infotip">
                <button
                  type="button"
                  className={['lmn-facet__btn', active ? 'is-active' : '', open ? 'is-open' : ''].filter(Boolean).join(' ')}
                  aria-haspopup="listbox"
                  aria-expanded={open}
                  onClick={() => setOpenKey(open ? null : f.key)}
                >
                  <span className="lmn-facet__txt">{selLabel}</span>
                  <span className="lmn-facet__chev">▾</span>
                </button>
                {!open && tip && <span className="lmn-infotip__tip" role="tooltip">{tip}</span>}
              </span>
              {open && (
                <div className="lmn-facet__menu" role="listbox">
                  <button
                    type="button"
                    className={['lmn-facet__opt', 'lmn-facet__opt--reset', !active ? 'is-sel' : ''].filter(Boolean).join(' ')}
                    onClick={() => { onChange(f.key, ALL); setOpenKey(null); }}
                  >
                    {f.allLabel || `Any ${f.label.toLowerCase()}`}
                  </button>
                  {f.options.map((o) => (
                    <button
                      type="button"
                      key={o.id}
                      role="option"
                      aria-selected={val === o.id}
                      className={['lmn-facet__opt', val === o.id ? 'is-sel' : ''].filter(Boolean).join(' ')}
                      onClick={() => { onChange(f.key, o.id); setOpenKey(null); }}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {activeCount > 0 && (
          <button type="button" className="lmn-facet__clear" onClick={onClear}>Clear all</button>
        )}
      </div>
      {typeof resultCount === 'number' && (
        <p className="lmn-facets__count">
          {resultCount} {resultCount === 1 ? resultNoun : `${resultNoun}s`}{activeCount > 0 ? ' · filtered' : ''}
        </p>
      )}
    </div>
  );
}
