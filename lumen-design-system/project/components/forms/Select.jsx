import React from 'react';

const CSS = `
.lmn-select{ display:flex; flex-direction:column; gap:6px; }
.lmn-select__label{ font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
.lmn-select__wrap{ position:relative; display:flex; }
.lmn-select select{
  appearance:none; -webkit-appearance:none; width:100%;
  font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-strong);
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-md); height:44px; padding:0 2.4em 0 .85em;
  cursor:pointer; transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.lmn-select select:hover{ border-color:var(--pine-300); }
.lmn-select select:focus-visible{ outline:none; border-color:var(--border-focus); box-shadow:var(--ring-focus); }
.lmn-select--pill select{ border-radius:var(--radius-pill); padding-left:1.1em; }
.lmn-select--sm select{ height:36px; font-size:var(--text-sm); }
.lmn-select__chev{
  position:absolute; right:.85em; top:50%; transform:translateY(-50%);
  pointer-events:none; color:var(--text-muted); font-size:.7em;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-select-css')) {
  const s = document.createElement('style'); s.id = 'lmn-select-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Select({ label, options = [], pill = false, size = 'md', className = '', id, children, ...rest }) {
  const selId = id || (label ? `lmn-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={['lmn-select', pill ? 'lmn-select--pill' : '', size === 'sm' ? 'lmn-select--sm' : '', className].filter(Boolean).join(' ')}>
      {label && <label className="lmn-select__label" htmlFor={selId}>{label}</label>}
      <div className="lmn-select__wrap">
        <select id={selId} {...rest}>
          {children || options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
        </select>
        <span className="lmn-select__chev" aria-hidden="true">▾</span>
      </div>
    </div>
  );
}
