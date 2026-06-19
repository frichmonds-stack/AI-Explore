import React from 'react';

const CSS = `
.lmn-alert{
  display:flex; gap:.75em; align-items:flex-start;
  border-radius:var(--radius-md); padding:var(--space-4);
  border:1px solid transparent; font-family:var(--font-sans);
}
.lmn-alert__icon{ flex:none; margin-top:1px; display:inline-flex; }
.lmn-alert__body{ flex:1; min-width:0; }
.lmn-alert__title{ font-weight:var(--weight-semibold); color:var(--text-strong); font-size:var(--text-sm); margin-bottom:2px; }
.lmn-alert__msg{ font-size:var(--text-sm); color:var(--text-body); line-height:var(--leading-normal); }
.lmn-alert__close{ flex:none; background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:18px; line-height:1; padding:2px; border-radius:4px; }
.lmn-alert__close:hover{ color:var(--text-strong); background:rgba(40,32,20,.06); }

.lmn-alert--info{ background:var(--info-100); border-color:color-mix(in srgb, var(--info-600) 22%, transparent); }
.lmn-alert--info .lmn-alert__icon{ color:var(--info-700); }
.lmn-alert--success{ background:var(--success-100); border-color:color-mix(in srgb, var(--success-600) 22%, transparent); }
.lmn-alert--success .lmn-alert__icon{ color:var(--success-700); }
.lmn-alert--warning{ background:var(--warning-100); border-color:color-mix(in srgb, var(--warning-600) 26%, transparent); }
.lmn-alert--warning .lmn-alert__icon{ color:var(--warning-700); }
.lmn-alert--danger{ background:var(--danger-100); border-color:color-mix(in srgb, var(--danger-600) 24%, transparent); }
.lmn-alert--danger .lmn-alert__icon{ color:var(--danger-700); }
.lmn-alert--pine{ background:var(--pine-50); border-color:var(--pine-200); }
.lmn-alert--pine .lmn-alert__icon{ color:var(--pine-600); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-alert-css')) {
  const s = document.createElement('style'); s.id = 'lmn-alert-css'; s.textContent = CSS; document.head.appendChild(s);
}

const ICONS = {
  info:    <path d="M12 8h.01M11 12h1v4h1M12 2a10 10 0 100 20 10 10 0 000-20z" />,
  success: <path d="M20 6 9 17l-5-5" />,
  warning: <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />,
  danger:  <path d="M12 9v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />,
  pine:    <path d="M12 8h.01M11 12h1v4h1M12 2a10 10 0 100 20 10 10 0 000-20z" />,
};

export function Alert({ tone = 'info', title, onClose, icon, className = '', children, ...rest }) {
  return (
    <div role="status" className={['lmn-alert', `lmn-alert--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      <span className="lmn-alert__icon">
        {icon || <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS[tone] || ICONS.info}</svg>}
      </span>
      <div className="lmn-alert__body">
        {title && <div className="lmn-alert__title">{title}</div>}
        <div className="lmn-alert__msg">{children}</div>
      </div>
      {onClose && <button className="lmn-alert__close" onClick={onClose} aria-label="Dismiss">×</button>}
    </div>
  );
}
