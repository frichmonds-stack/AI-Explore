
const CSS = `
.lmn-tag{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-medium);
  color:var(--text-body); background:var(--surface-sunken);
  border:1px solid var(--border-subtle); border-radius:var(--radius-pill);
  padding:.32em .8em; line-height:1.2; white-space:nowrap;
  transition:var(--transition-base);
}
button.lmn-tag, a.lmn-tag{ cursor:pointer; }
button.lmn-tag:hover, a.lmn-tag:hover{ background:var(--pine-50); border-color:var(--pine-200); color:var(--pine-700); text-decoration:none; }
.lmn-tag--active{ background:var(--pine-600); border-color:var(--pine-600); color:#fff; }
.lmn-tag--active:hover{ background:var(--pine-700) !important; border-color:var(--pine-700) !important; color:#fff !important; }
.lmn-tag__x{ display:inline-flex; margin-right:-.15em; opacity:.6; font-size:1.1em; line-height:1; }
.lmn-tag__x:hover{ opacity:1; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tag-css')) {
  const s = document.createElement('style'); s.id = 'lmn-tag-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tag({ active = false, onRemove, interactive, as, className = '', children, ...rest }) {
  const Tag = as || (interactive || rest.onClick ? 'button' : 'span');
  const cls = ['lmn-tag', active ? 'lmn-tag--active' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {children}
      {onRemove && (
        <span className="lmn-tag__x" onClick={(e) => { e.stopPropagation(); onRemove(e); }} aria-label="Remove">×</span>
      )}
    </Tag>
  );
}
