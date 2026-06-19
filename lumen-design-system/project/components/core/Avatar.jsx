import React from 'react';

const CSS = `
.lmn-avatar{
  display:inline-flex; align-items:center; justify-content:center;
  border-radius:50%; overflow:hidden; flex:none;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  background:var(--pine-100); color:var(--pine-700);
  border:1px solid rgba(40,32,20,.06);
}
.lmn-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.lmn-avatar--xs{ width:24px; height:24px; font-size:10px; }
.lmn-avatar--sm{ width:32px; height:32px; font-size:12px; }
.lmn-avatar--md{ width:44px; height:44px; font-size:15px; }
.lmn-avatar--lg{ width:64px; height:64px; font-size:22px; }
.lmn-avatar--square{ border-radius:var(--radius-md); }
.lmn-avatar--clay{ background:var(--clay-100); color:var(--clay-700); }
.lmn-avatar--ochre{ background:var(--ochre-100); color:var(--ochre-600); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-avatar-css')) {
  const s = document.createElement('style'); s.id = 'lmn-avatar-css'; s.textContent = CSS; document.head.appendChild(s);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export function Avatar({ name = '', src, size = 'md', shape = 'circle', tone = 'pine', className = '', ...rest }) {
  const cls = [
    'lmn-avatar',
    `lmn-avatar--${size}`,
    shape === 'square' ? 'lmn-avatar--square' : '',
    tone === 'clay' ? 'lmn-avatar--clay' : '',
    tone === 'ochre' ? 'lmn-avatar--ochre' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
