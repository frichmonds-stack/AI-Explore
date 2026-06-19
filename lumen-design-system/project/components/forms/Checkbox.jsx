import React from 'react';

const CSS = `
.lmn-check{ display:inline-flex; align-items:center; gap:.6em; cursor:pointer; font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-body); user-select:none; }
.lmn-check input{ position:absolute; opacity:0; width:0; height:0; }
.lmn-check__box{
  width:20px; height:20px; flex:none; border-radius:6px;
  border:1.5px solid var(--border-strong); background:var(--surface-card);
  display:inline-flex; align-items:center; justify-content:center;
  transition:var(--transition-base); color:#fff;
}
.lmn-check__box svg{ width:13px; height:13px; opacity:0; transform:scale(.6); transition:var(--transition-base); }
.lmn-check:hover .lmn-check__box{ border-color:var(--pine-400); }
.lmn-check input:checked + .lmn-check__box{ background:var(--pine-600); border-color:var(--pine-600); }
.lmn-check input:checked + .lmn-check__box svg{ opacity:1; transform:scale(1); }
.lmn-check input:focus-visible + .lmn-check__box{ box-shadow:var(--ring-focus); }
.lmn-check__count{ margin-left:auto; color:var(--text-faint); font-family:var(--font-mono); font-size:var(--text-xs); }
.lmn-check--round .lmn-check__box{ border-radius:50%; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-check-css')) {
  const s = document.createElement('style'); s.id = 'lmn-check-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Checkbox({ label, count, round = false, className = '', ...rest }) {
  return (
    <label className={['lmn-check', round ? 'lmn-check--round' : '', className].filter(Boolean).join(' ')}>
      <input type="checkbox" {...rest} />
      <span className="lmn-check__box">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      {label && <span>{label}</span>}
      {count != null && <span className="lmn-check__count">{count}</span>}
    </label>
  );
}
