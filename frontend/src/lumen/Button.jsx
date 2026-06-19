import React from 'react';

/* Inject Button styles once per session. */
const CSS = `
.lmn-btn{
  display:inline-flex; align-items:center; justify-content:center; gap:.5em;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  border:1px solid transparent; border-radius:var(--radius-pill);
  cursor:pointer; white-space:nowrap; text-decoration:none;
  transition:var(--transition-hover); user-select:none;
}
.lmn-btn:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
.lmn-btn[disabled]{ cursor:not-allowed; opacity:.5; box-shadow:none; }

/* sizes */
.lmn-btn--sm{ font-size:var(--text-sm); padding:.4rem .9rem; }
.lmn-btn--md{ font-size:var(--text-base); padding:.6rem 1.25rem; }
.lmn-btn--lg{ font-size:var(--text-md); padding:.8rem 1.6rem; }

/* primary */
.lmn-btn--primary{ background:var(--color-primary); color:var(--color-primary-on); }
.lmn-btn--primary:hover:not([disabled]){ background:var(--color-primary-hover); box-shadow:var(--shadow-pine); transform:translateY(-1px); }
.lmn-btn--primary:active:not([disabled]){ background:var(--color-primary-active); transform:translateY(0); box-shadow:var(--shadow-xs); }

/* accent */
.lmn-btn--accent{ background:var(--color-accent); color:var(--color-accent-on); }
.lmn-btn--accent:hover:not([disabled]){ background:var(--color-accent-hover); transform:translateY(-1px); box-shadow:var(--shadow-md); }
.lmn-btn--accent:active:not([disabled]){ transform:translateY(0); }

/* secondary (outline) */
.lmn-btn--secondary{ background:var(--surface-card); color:var(--text-strong); border-color:var(--border-strong); }
.lmn-btn--secondary:hover:not([disabled]){ background:var(--surface-sunken); border-color:var(--pine-300); }
.lmn-btn--secondary:active:not([disabled]){ background:var(--surface-raised); }

/* ghost */
.lmn-btn--ghost{ background:transparent; color:var(--color-primary); }
.lmn-btn--ghost:hover:not([disabled]){ background:var(--color-primary-soft); }

.lmn-btn--block{ width:100%; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-btn-css')) {
  const s = document.createElement('style'); s.id = 'lmn-btn-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = [
    'lmn-btn',
    `lmn-btn--${variant}`,
    `lmn-btn--${size}`,
    block ? 'lmn-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
