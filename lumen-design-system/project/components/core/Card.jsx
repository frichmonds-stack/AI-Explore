import React from 'react';

const CSS = `
.lmn-card{
  background:var(--surface-card);
  border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-sm);
  overflow:hidden;
}
.lmn-card--flat{ box-shadow:none; }
.lmn-card--raised{ box-shadow:var(--shadow-md); }
.lmn-card--pad-sm{ padding:var(--space-4); }
.lmn-card--pad-md{ padding:var(--space-5); }
.lmn-card--pad-lg{ padding:var(--space-6); }
.lmn-card--interactive{ cursor:pointer; transition:var(--transition-hover); }
.lmn-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:var(--pine-200); }
.lmn-card--interactive:active{ transform:translateY(-1px); box-shadow:var(--shadow-md); }
.lmn-card:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-card-css')) {
  const s = document.createElement('style'); s.id = 'lmn-card-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Card({ pad = 'none', elevation = 'sm', interactive = false, as = 'div', className = '', children, ...rest }) {
  const Tag = as;
  const cls = [
    'lmn-card',
    elevation === 'flat' ? 'lmn-card--flat' : '',
    elevation === 'raised' ? 'lmn-card--raised' : '',
    pad !== 'none' ? `lmn-card--pad-${pad}` : '',
    interactive ? 'lmn-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
