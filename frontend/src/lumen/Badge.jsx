
const CSS = `
.lmn-badge{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  font-size:var(--text-xs); line-height:1;
  padding:.3em .65em; border-radius:var(--radius-pill);
  border:1px solid transparent; white-space:nowrap;
}
.lmn-badge--dot::before{ content:""; width:.5em; height:.5em; border-radius:50%; background:currentColor; opacity:.9; }

.lmn-badge--neutral{ background:var(--surface-raised); color:var(--text-body); }
.lmn-badge--primary{ background:var(--pine-100); color:var(--pine-700); }
.lmn-badge--accent{ background:var(--clay-100); color:var(--clay-700); }
.lmn-badge--ochre{ background:var(--ochre-100); color:var(--ochre-600); }
.lmn-badge--success{ background:var(--success-100); color:var(--success-700); }
.lmn-badge--warning{ background:var(--warning-100); color:var(--warning-700); }
.lmn-badge--danger{ background:var(--danger-100); color:var(--danger-700); }
.lmn-badge--info{ background:var(--info-100); color:var(--info-700); }

/* solid */
.lmn-badge--solid.lmn-badge--primary{ background:var(--pine-600); color:#fff; }
.lmn-badge--solid.lmn-badge--accent{ background:var(--clay-500); color:#fff; }
.lmn-badge--solid.lmn-badge--success{ background:var(--success-600); color:#fff; }

/* outline */
.lmn-badge--outline{ background:transparent; border-color:var(--border-strong); color:var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-badge-css')) {
  const s = document.createElement('style'); s.id = 'lmn-badge-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Badge({ tone = 'neutral', variant = 'soft', dot = false, className = '', children, ...rest }) {
  const cls = [
    'lmn-badge',
    `lmn-badge--${tone}`,
    variant === 'solid' ? 'lmn-badge--solid' : '',
    variant === 'outline' ? 'lmn-badge--outline' : '',
    dot ? 'lmn-badge--dot' : '',
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children}</span>;
}
