import React from 'react';

const CSS = `
.lmn-field{ display:flex; flex-direction:column; gap:6px; }
.lmn-field__label{ font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
.lmn-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
.lmn-field__err{ font-size:var(--text-xs); color:var(--danger-700); }

.lmn-input{
  display:flex; align-items:center; gap:.55em;
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-md); padding:0 .85em; height:44px;
  transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.lmn-input:hover{ border-color:var(--pine-300); }
.lmn-input:focus-within{ border-color:var(--border-focus); box-shadow:var(--ring-focus); }
.lmn-input--invalid{ border-color:var(--danger-600); }
.lmn-input--invalid:focus-within{ box-shadow:var(--ring-danger); }
.lmn-input--pill{ border-radius:var(--radius-pill); }
.lmn-input--sm{ height:36px; font-size:var(--text-sm); }
.lmn-input input{
  flex:1; min-width:0; border:none; outline:none; background:transparent;
  font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-strong);
}
.lmn-input input::placeholder{ color:var(--text-faint); }
.lmn-input__icon{ display:inline-flex; color:var(--text-muted); flex:none; }
.lmn-input[disabled], .lmn-input--disabled{ background:var(--surface-sunken); opacity:.65; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-input-css')) {
  const s = document.createElement('style'); s.id = 'lmn-input-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Input({
  label, hint, error, icon, trailing, pill = false, size = 'md',
  disabled = false, className = '', id, ...rest
}) {
  const inputId = id || (label ? `lmn-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={['lmn-field', className].filter(Boolean).join(' ')}>
      {label && <label className="lmn-field__label" htmlFor={inputId}>{label}</label>}
      <div className={[
        'lmn-input',
        pill ? 'lmn-input--pill' : '',
        size === 'sm' ? 'lmn-input--sm' : '',
        error ? 'lmn-input--invalid' : '',
        disabled ? 'lmn-input--disabled' : '',
      ].filter(Boolean).join(' ')}>
        {icon && <span className="lmn-input__icon">{icon}</span>}
        <input id={inputId} disabled={disabled} aria-invalid={!!error} {...rest} />
        {trailing && <span className="lmn-input__icon">{trailing}</span>}
      </div>
      {error ? <span className="lmn-field__err">{error}</span> : hint ? <span className="lmn-field__hint">{hint}</span> : null}
    </div>
  );
}
