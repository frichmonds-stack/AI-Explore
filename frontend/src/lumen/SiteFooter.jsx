import React from 'react';
import { Link } from 'react-router-dom';

const navCols = [
  {
    heading: 'Get the work done',
    links: [
      { to: '/articles', label: 'Articles' },
      { to: '/guides', label: 'Guides' },
      { to: '/tools', label: 'Tools' },
    ],
  },
  {
    heading: 'Grow the craft',
    links: [
      { to: '/pedagogies', label: 'Teaching' },
      { to: '/learn', label: 'Learn' },
      { to: '/learn/capabilities', label: 'AI capabilities' },
      { to: '/risks', label: 'AI safety' },
    ],
  },
  {
    heading: 'Reference',
    links: [
      { to: '/about', label: 'About' },
      { to: '/glossary', label: 'Glossary' },
      { to: '/saved', label: 'Saved' },
    ],
  },
];

const CSS = `
.lmn-footer{ margin-top:var(--space-12,5rem); background:var(--paper-100); border-top:1px solid var(--border-subtle); }
.lmn-footer__inner{ max-width:64rem; margin:0 auto; padding:var(--space-8) var(--space-5) var(--space-6); }
.lmn-footer__top{ display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr; gap:var(--space-6); }
@media (max-width:720px){ .lmn-footer__top{ grid-template-columns:1fr 1fr; } .lmn-footer__brandcol{ grid-column:1 / -1; } }
.lmn-footer__word{ font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:var(--text-lg); color:var(--text-strong); }
.lmn-footer__tagline{ font-size:var(--text-sm); color:var(--text-muted); line-height:var(--leading-relaxed); margin-top:var(--space-2); max-width:30ch; }
.lmn-footer__colhdr{ font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); margin-bottom:var(--space-3); }
.lmn-footer__link{ display:block; font-size:var(--text-sm); color:var(--text-body); text-decoration:none; padding:.2em 0; }
.lmn-footer__link:hover{ color:var(--pine-700); text-decoration:none; }

.lmn-footer__disclaimer{ margin-top:var(--space-7); padding:var(--space-4) var(--space-5); background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:var(--text-xs); color:var(--text-muted); line-height:var(--leading-relaxed); }
.lmn-footer__disclaimer strong{ color:var(--text-body); }
.lmn-footer__disclaimer a{ color:var(--pine-700); text-decoration:underline; }

.lmn-footer__base{ margin-top:var(--space-6); padding-top:var(--space-4); border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; gap:var(--space-4); flex-wrap:wrap; font-size:var(--text-xs); color:var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-footer-css')) {
  const s = document.createElement('style'); s.id = 'lmn-footer-css'; s.textContent = CSS; document.head.appendChild(s);
}

// Last content update, shown in the footer.
const SITE_UPDATED = 'July 2026';

export function SiteFooter() {
  return (
    <footer className="lmn-footer">
      <div className="lmn-footer__inner">
        <div className="lmn-footer__top">
          <div className="lmn-footer__brandcol">
            <span className="lmn-footer__word">AI for Teachers</span>
            <p className="lmn-footer__tagline">
              Practical, classroom-ready help for teaching with AI — start with the work, grow the craft, keep children safe.
            </p>
          </div>
          {navCols.map((col) => (
            <div key={col.heading}>
              <p className="lmn-footer__colhdr">{col.heading}</p>
              {col.links.map((l) => (
                <Link key={l.to + l.label} to={l.to} className="lmn-footer__link">{l.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <p className="lmn-footer__disclaimer">
          <strong>Independent project.</strong>{' '}
          <Link to="/about">More about this site</Link>.{' '}
          Tools listed here are not independently reviewed or endorsed — always confirm a tool’s suitability, its current
          status, and your school’s policy before using it with students. The labels used across the site are explained in
          the <Link to="/glossary">glossary</Link>.
        </p>

        <div className="lmn-footer__base">
          <span>A professional-learning resource for K–12 educators.</span>
          <span>Updated {SITE_UPDATED}</span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
