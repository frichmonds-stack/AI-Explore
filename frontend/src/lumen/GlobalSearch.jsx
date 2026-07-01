import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { search } from '../lib/searchIndex';

// Colour cue per result type so groups are scannable at a glance.
const TYPE_TONE = {
  Tool: 'var(--pine-600)',
  Guide: 'var(--clay-500)',
  Capability: 'var(--ochre-600, #b8893a)',
};
const toneFor = (type) => TYPE_TONE[type] || 'var(--text-muted)';

const CSS = `
.lmn-search-trigger{
  display:inline-flex; align-items:center; gap:.5em;
  font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-muted);
  background:var(--surface-raised); border:1px solid var(--border-subtle);
  border-radius:var(--radius-pill); padding:.4em .8em; cursor:pointer;
  transition:var(--transition-base);
}
.lmn-search-trigger:hover{ border-color:var(--pine-300, var(--pine-200)); color:var(--text-body); }
.lmn-search-trigger__kbd{
  font-family:var(--font-mono); font-size:var(--text-2xs); color:var(--text-muted);
  background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-sm);
  padding:.1em .4em; line-height:1.2;
}
@media (max-width:640px){ .lmn-search-trigger__label, .lmn-search-trigger__kbd{ display:none; } }

.lmn-search-overlay{
  position:fixed; inset:0; z-index:100; display:flex; justify-content:center; align-items:flex-start;
  padding:max(8vh,48px) var(--space-4) var(--space-4);
  background:color-mix(in srgb, var(--ink-900, #1a2420) 38%, transparent);
  backdrop-filter:blur(2px);
}
.lmn-search-panel{
  width:100%; max-width:580px; background:var(--surface-card);
  border:1px solid var(--border-subtle); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-lg); overflow:hidden; display:flex; flex-direction:column; max-height:72vh;
}
.lmn-search-inputrow{ display:flex; align-items:center; gap:var(--space-3); padding:var(--space-4) var(--space-5); border-bottom:1px solid var(--border-subtle); }
.lmn-search-input{
  flex:1; border:none; outline:none; background:transparent;
  font-family:var(--font-sans); font-size:var(--text-lg); color:var(--text-strong);
}
.lmn-search-input::placeholder{ color:var(--text-muted); }
.lmn-search-esc{ font-family:var(--font-mono); font-size:var(--text-2xs); color:var(--text-muted); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:.15em .45em; }
.lmn-search-results{ overflow-y:auto; padding:var(--space-2); }
.lmn-search-grouphdr{ font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); padding:var(--space-3) var(--space-3) var(--space-1); }
.lmn-search-item{ display:flex; align-items:flex-start; gap:var(--space-3); padding:var(--space-3); border-radius:var(--radius-md); cursor:pointer; text-decoration:none; }
.lmn-search-item--active{ background:var(--pine-50); }
.lmn-search-item__dot{ width:7px; height:7px; border-radius:50%; flex:none; margin-top:.5em; }
.lmn-search-item__title{ font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:var(--text-base); color:var(--text-strong); line-height:1.25; }
.lmn-search-item__sub{ font-family:var(--font-mono); font-size:var(--text-2xs); color:var(--text-muted); }
.lmn-search-item__summary{ font-size:var(--text-sm); color:var(--text-muted); line-height:var(--leading-snug,1.4); margin-top:2px; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden; }
.lmn-search-empty{ padding:var(--space-7) var(--space-5); text-align:center; color:var(--text-muted); font-size:var(--text-sm); }
.lmn-search-hint{ display:flex; gap:var(--space-4); padding:var(--space-3) var(--space-5); border-top:1px solid var(--border-subtle); font-family:var(--font-mono); font-size:var(--text-2xs); color:var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-search-css')) {
  const s = document.createElement('style'); s.id = 'lmn-search-css'; s.textContent = CSS; document.head.appendChild(s);
}

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '');

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = open ? search(query) : [];

  const close = useCallback(() => { setOpen(false); setQuery(''); setActive(0); }, []);

  // Global Cmd/Ctrl-K to open, Esc to close.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape' && open) {
        close();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  // Focus the field and lock body scroll while open.
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 20);
      document.body.style.overflow = 'hidden';
      return () => { clearTimeout(t); document.body.style.overflow = ''; };
    }
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  const go = useCallback((record) => {
    if (!record) return;
    navigate(record.to);
    close();
  }, [navigate, close]);

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); go(results[active]); }
  };

  return (
    <>
      <button type="button" className="lmn-search-trigger" onClick={() => setOpen(true)} aria-label="Search the site">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        </svg>
        <span className="lmn-search-trigger__label">Search</span>
        <span className="lmn-search-trigger__kbd">{isMac ? '⌘' : 'Ctrl'} K</span>
      </button>

      {open && (
        <div className="lmn-search-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }} role="dialog" aria-modal="true" aria-label="Site search">
          <div className="lmn-search-panel">
            <div className="lmn-search-inputrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                className="lmn-search-input"
                placeholder="Search tools, guides, capabilities…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
              />
              <span className="lmn-search-esc">esc</span>
            </div>

            <div className="lmn-search-results">
              {query.trim().length >= 2 && results.length === 0 && (
                <div className="lmn-search-empty">No matches for “{query.trim()}”.</div>
              )}
              {query.trim().length < 2 && (
                <div className="lmn-search-empty">Type to search across tools, guides, AI capabilities and learning content.</div>
              )}
              {groupByType(results).map(([type, items]) => (
                <div key={type}>
                  <div className="lmn-search-grouphdr">{type}</div>
                  {items.map((r) => {
                    const idx = results.indexOf(r);
                    return (
                      <a
                        key={r.id}
                        href={`#${r.to}`}
                        className={['lmn-search-item', idx === active ? 'lmn-search-item--active' : ''].filter(Boolean).join(' ')}
                        onMouseEnter={() => setActive(idx)}
                        onClick={(e) => { e.preventDefault(); go(r); }}
                      >
                        <span className="lmn-search-item__dot" style={{ background: toneFor(r.type) }} />
                        <span style={{ minWidth: 0 }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                            <span className="lmn-search-item__title">{r.title}</span>
                            {r.subtitle && <span className="lmn-search-item__sub">{r.subtitle}</span>}
                          </span>
                          {r.summary && <span className="lmn-search-item__summary">{r.summary}</span>}
                        </span>
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="lmn-search-hint">
              <span>↑↓ to move</span><span>↵ to open</span><span>esc to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Keep results in relevance order but cluster by type for readable headers.
function groupByType(results) {
  const order = [];
  const map = new Map();
  for (const r of results) {
    if (!map.has(r.type)) { map.set(r.type, []); order.push(r.type); }
    map.get(r.type).push(r);
  }
  return order.map((t) => [t, map.get(t)]);
}

export default GlobalSearch;
