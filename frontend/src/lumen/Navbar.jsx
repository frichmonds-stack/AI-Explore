import React from 'react';

const CSS = `
.lmn-nav{
  display:flex; align-items:center; gap:var(--space-5);
  height:64px; padding:0 var(--space-5);
  background:color-mix(in srgb, var(--surface-page) 86%, transparent);
  backdrop-filter:saturate(1.4) blur(10px); -webkit-backdrop-filter:saturate(1.4) blur(10px);
  border-bottom:1px solid var(--border-subtle);
}
.lmn-nav__brand{ display:inline-flex; align-items:center; gap:.55em; text-decoration:none; flex:none; }
.lmn-nav__brand:hover{ text-decoration:none; }
.lmn-nav__word{ font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:1.45rem; color:var(--text-strong); letter-spacing:-.01em; }
.lmn-nav__links{ display:flex; align-items:center; gap:2px; margin-left:var(--space-3); }
.lmn-nav__link{
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-medium);
  color:var(--text-body); padding:.5em .8em; border-radius:var(--radius-sm);
  text-decoration:none; transition:var(--transition-base);
}
.lmn-nav__link:hover{ background:var(--surface-raised); color:var(--text-strong); text-decoration:none; }
.lmn-nav__link--active{ color:var(--pine-700); background:var(--pine-50); font-weight:var(--weight-semibold); }
.lmn-nav__spacer{ flex:1; }
.lmn-nav__right{ display:flex; align-items:center; gap:var(--space-3); flex:none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-nav-css')) {
  const s = document.createElement('style'); s.id = 'lmn-nav-css'; s.textContent = CSS; document.head.appendChild(s);
}

/** Self-contained Lumen halo mark. */
export function LumenMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <circle cx="48" cy="48" r="30" stroke="var(--pine-600)" strokeWidth="7" fill="none" strokeLinecap="round" strokeDasharray="135 53" transform="rotate(-58 48 48)" />
      <circle cx="48" cy="48" r="10.5" fill="var(--clay-500)" />
    </svg>
  );
}

export function Navbar({ links = [], right, brandHref = '#', wordmark = 'Lumen', className = '', ...rest }) {
  return (
    <nav className={['lmn-nav', className].filter(Boolean).join(' ')} {...rest}>
      <a className="lmn-nav__brand" href={brandHref}>
        <LumenMark />
        <span className="lmn-nav__word">{wordmark}</span>
      </a>
      {links.length > 0 && (
        <div className="lmn-nav__links">
          {links.map((l) => (
            <a key={l.label} href={l.href || '#'} onClick={l.onClick}
               className={['lmn-nav__link', l.active ? 'lmn-nav__link--active' : ''].filter(Boolean).join(' ')}>
              {l.label}
            </a>
          ))}
        </div>
      )}
      <span className="lmn-nav__spacer" />
      {right && <div className="lmn-nav__right">{right}</div>}
    </nav>
  );
}
