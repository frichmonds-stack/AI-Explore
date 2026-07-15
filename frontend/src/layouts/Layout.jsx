import { Outlet, NavLink, Link } from 'react-router-dom';
import { LumenMark } from '../lumen/Navbar';
import { GlobalSearch } from '../lumen/GlobalSearch';
import { SiteFooter } from '../lumen/SiteFooter';
import { useBookmarks } from '../lib/useBookmarks';

// Work-first order: do the work, then the tools, then the craft, then learn about AI.
// About AI / AI Capabilities / AI Safety all live under the Learn hub.
const tracks = [
  { id: 'guides', label: 'Explore' },
  { id: 'tools', label: 'Tools' },
  { id: 'pedagogies', label: 'Teaching' },
  { id: 'learn', label: 'Learn' },
];

// Compact saved-shortlist link with a live count badge, sits by the search trigger.
function SavedNavLink() {
  const { count } = useBookmarks();
  return (
    <Link to="/saved" title="Saved" aria-label={`Saved (${count})`} style={{
      position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 34, height: 34, borderRadius: 'var(--radius-md)', color: 'var(--text-body)', textDecoration: 'none',
    }}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill={count > 0 ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
      </svg>
      {count > 0 && (
        <span style={{
          position: 'absolute', top: -3, right: -3, minWidth: 15, height: 15, padding: '0 3px',
          background: 'var(--clay-500)', color: '#fff', borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-mono)', fontSize: '9px', lineHeight: '15px', textAlign: 'center', fontWeight: 600,
        }}>{count}</span>
      )}
    </Link>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--surface-page)' }}>
      <nav className="lmn-nav">
        <NavLink to="/" className="lmn-nav__brand">
          <LumenMark />
          <span className="lmn-nav__word">Pigeon Hole</span>
        </NavLink>
        {/* Single inline nav — four short labels fit every screen, so no separate mobile menu. */}
        <div className="lmn-nav__links">
          {tracks.map((t) => (
            <NavLink
              key={t.id}
              to={`/${t.id}`}
              className={({ isActive }) =>
                ['lmn-nav__link', isActive ? 'lmn-nav__link--active' : ''].filter(Boolean).join(' ')
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>
        <span className="lmn-nav__spacer" />
        <div className="lmn-nav__right">
          <GlobalSearch />
          <SavedNavLink />
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}
