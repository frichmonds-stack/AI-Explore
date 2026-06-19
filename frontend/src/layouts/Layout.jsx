import { Outlet, NavLink } from 'react-router-dom';
import { LumenMark } from '../lumen/Navbar';

const tracks = [
  { id: 'tools', label: 'AI Tools' },
  { id: 'foundations', label: 'AI Foundations' },
  { id: 'risks', label: 'Risks & Responsibility' },
  { id: 'practice', label: 'Your Practice' },
  { id: 'pedagogies', label: 'Pedagogies' },
  { id: 'explore', label: 'Explore Further' },
];

export default function Layout() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--surface-page)' }}>
      <nav className="lmn-nav">
        <NavLink to="/" className="lmn-nav__brand">
          <LumenMark />
          <span className="lmn-nav__word">AI for Teachers</span>
        </NavLink>
        <div className="lmn-nav__links hidden lg:flex">
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
        {/* Mobile menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
                style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}>
              {tracks.map((t) => (
                <li key={t.id}>
                  <NavLink to={`/${t.id}`} style={{ fontFamily: 'var(--font-sans)' }}>{t.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
