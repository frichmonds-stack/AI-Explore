import React from 'react';

const CSS = `
.lmn-tabs{ display:flex; gap:4px; border-bottom:1px solid var(--border-subtle); }
.lmn-tabs__tab{
  position:relative; font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold);
  color:var(--text-muted); background:none; border:none; cursor:pointer;
  padding:.7em .9em; border-radius:var(--radius-sm) var(--radius-sm) 0 0;
  transition:color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard);
}
.lmn-tabs__tab:hover{ color:var(--text-strong); background:var(--surface-sunken); }
.lmn-tabs__tab--active{ color:var(--pine-700); }
.lmn-tabs__tab--active::after{
  content:""; position:absolute; left:.9em; right:.9em; bottom:-1px; height:2.5px;
  background:var(--pine-600); border-radius:2px;
}
.lmn-tabs__count{ font-family:var(--font-mono); font-size:11px; color:var(--text-faint); margin-left:.45em; }
.lmn-tabs--pill{ border:none; gap:6px; }
.lmn-tabs--pill .lmn-tabs__tab{ border-radius:var(--radius-pill); padding:.5em 1em; }
.lmn-tabs--pill .lmn-tabs__tab--active{ background:var(--pine-600); color:#fff; }
.lmn-tabs--pill .lmn-tabs__tab--active::after{ display:none; }
.lmn-tabs--pill .lmn-tabs__tab--active .lmn-tabs__count{ color:rgba(255,255,255,.7); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tabs-css')) {
  const s = document.createElement('style'); s.id = 'lmn-tabs-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tabs({ items = [], value, onChange, variant = 'underline', className = '', ...rest }) {
  return (
    <div role="tablist" className={['lmn-tabs', variant === 'pill' ? 'lmn-tabs--pill' : '', className].filter(Boolean).join(' ')} {...rest}>
      {items.map((it) => {
        const val = typeof it === 'string' ? it : it.value;
        const label = typeof it === 'string' ? it : it.label;
        const count = typeof it === 'string' ? undefined : it.count;
        const active = val === value;
        return (
          <button key={val} role="tab" aria-selected={active}
            className={['lmn-tabs__tab', active ? 'lmn-tabs__tab--active' : ''].filter(Boolean).join(' ')}
            onClick={() => onChange && onChange(val)}>
            {label}
            {count != null && <span className="lmn-tabs__count">{count}</span>}
          </button>
        );
      })}
    </div>
  );
}
