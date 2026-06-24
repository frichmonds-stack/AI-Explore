import { Outlet, NavLink } from 'react-router-dom';
import { LumenMark } from '../lumen/Navbar';

// Work-first order: do the work, then the tools, then the craft, then learn about AI.
// About AI / AI Capabilities / AI Safety all live under the Learn hub.
const tracks = [
  { id: 'guides', label: 'Explore' },
  { id: 'tools', label: 'Tools' },
  { id: 'pedagogies', label: 'Teaching' },
  { id: 'learn', label: 'Learn' },
];

export default function Layout() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--surface-page)' }}>
      <nav className="lmn-nav">
        <NavLink to="/" className="lmn-nav__brand">
          <LumenMark />
          <span className="lmn-nav__word">AI for Teachers</span>
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
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
        <Outlet />
      </main>

      <footer className="footer footer-center p-6 mt-16"
              style={{ background: 'var(--paper-100)', borderTop: '1px solid var(--border-subtle)' }}>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          AI for Teachers — A professional development resource for K–12 educators
        </p>
      </footer>
    </div>
  );
}
