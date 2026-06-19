import React from 'react';
import { StatusBadge } from './StatusBadge.jsx';
import { Tag } from '../core/Tag.jsx';
import { Badge } from '../core/Badge.jsx';

const CSS = `
.lmn-tool{
  position:relative; display:flex; flex-direction:column; gap:var(--space-4);
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-sm);
  padding:var(--space-5); transition:var(--transition-hover);
  height:100%;
}
.lmn-tool--interactive{ cursor:pointer; }
.lmn-tool--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:var(--pine-200); }
.lmn-tool--featured{ border-color:var(--ochre-200); box-shadow:0 0 0 1px var(--ochre-200), var(--shadow-sm); }

.lmn-tool__head{ display:flex; align-items:flex-start; gap:var(--space-3); }
.lmn-tool__logo{
  width:48px; height:48px; flex:none; border-radius:var(--radius-md);
  display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:22px;
  color:var(--pine-700); background:var(--pine-50); border:1px solid var(--pine-100);
  overflow:hidden;
}
.lmn-tool__logo img{ width:100%; height:100%; object-fit:cover; }
.lmn-tool__titles{ flex:1; min-width:0; }
.lmn-tool__name{
  font-family:var(--font-display); font-weight:var(--weight-semibold);
  font-size:var(--text-lg); line-height:1.15; color:var(--text-strong);
  display:flex; align-items:center; gap:.5em; flex-wrap:wrap;
}
.lmn-tool__vendor{ font-size:var(--text-xs); color:var(--text-muted); margin-top:3px; font-family:var(--font-mono); letter-spacing:.04em; }
.lmn-tool__desc{ font-size:var(--text-sm); color:var(--text-body); line-height:var(--leading-relaxed); margin:0; }

.lmn-tool__meta{ display:flex; flex-direction:column; gap:var(--space-3); margin-top:auto; }
.lmn-tool__roles{ display:flex; flex-wrap:wrap; gap:6px; align-items:center; }
.lmn-tool__roleslabel{ font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--text-faint); }
.lmn-tool__role{
  font-size:var(--text-xs); font-weight:var(--weight-medium); color:var(--pine-700);
  background:var(--pine-50); border-radius:var(--radius-sm); padding:.2em .5em;
}
.lmn-tool__tags{ display:flex; flex-wrap:wrap; gap:6px; }
.lmn-tool__foot{
  display:flex; align-items:center; justify-content:space-between;
  border-top:1px solid var(--border-subtle); padding-top:var(--space-3); margin-top:2px;
}
.lmn-tool__more{
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold);
  color:var(--color-primary); display:inline-flex; align-items:center; gap:.3em;
  opacity:.55; transition:opacity var(--dur-base), transform var(--dur-base);
}
.lmn-tool--interactive:hover .lmn-tool__more{ opacity:1; transform:translateX(2px); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tool-css')) {
  const s = document.createElement('style'); s.id = 'lmn-tool-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function ToolCard({
  name,
  vendor,
  description,
  logo,
  status = 'unreviewed',
  roles = [],
  tags = [],
  featured = false,
  popular = false,
  interactive = true,
  showFooter = true,
  className = '',
  ...rest
}) {
  const cls = [
    'lmn-tool',
    interactive ? 'lmn-tool--interactive' : '',
    featured ? 'lmn-tool--featured' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <article className={cls} {...rest}>
      <div className="lmn-tool__head">
        <div className="lmn-tool__logo">
          {logo ? <img src={logo} alt="" /> : (name ? name.trim()[0] : '·')}
        </div>
        <div className="lmn-tool__titles">
          <div className="lmn-tool__name">
            {name}
            {featured && <Badge tone="ochre" dot>Featured</Badge>}
            {popular && !featured && <Badge tone="primary">Popular</Badge>}
          </div>
          {vendor && <div className="lmn-tool__vendor">{vendor}</div>}
        </div>
        <StatusBadge status={status} />
      </div>

      {description && <p className="lmn-tool__desc">{description}</p>}

      <div className="lmn-tool__meta">
        {roles.length > 0 && (
          <div className="lmn-tool__roles">
            <span className="lmn-tool__roleslabel">Suits</span>
            {roles.map((r) => <span className="lmn-tool__role" key={r}>{r}</span>)}
          </div>
        )}
        {tags.length > 0 && (
          <div className="lmn-tool__tags">
            {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        )}
        {showFooter && (
          <div className="lmn-tool__foot">
            {popular && featured ? <Badge tone="primary">Popular</Badge> : <span />}
            <span className="lmn-tool__more">View details →</span>
          </div>
        )}
      </div>
    </article>
  );
}
