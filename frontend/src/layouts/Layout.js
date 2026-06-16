import { Outlet, NavLink } from 'react-router-dom';

const tracks = [
  { id: 'foundations', label: 'AI Foundations' },
  { id: 'risks', label: 'Risks & Responsibility' },
  { id: 'practice', label: 'Your Practice' },
  { id: 'pedagogies', label: 'Pedagogies' },
  { id: 'explore', label: 'Explore Further' },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-base-100">
      <nav className="navbar bg-base-200 shadow-sm px-4 lg:px-8">
        <div className="navbar-start">
          <NavLink to="/" className="text-xl font-bold text-primary tracking-tight">
            AI for Teachers
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex gap-1">
          {tracks.map((t) => (
            <NavLink
              key={t.id}
              to={`/${t.id}`}
              className={({ isActive }) =>
                `btn btn-sm btn-ghost ${isActive ? 'btn-active' : ''}`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>
        {/* Mobile drawer */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              {tracks.map((t) => (
                <li key={t.id}>
                  <NavLink to={`/${t.id}`}>{t.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
        <Outlet />
      </main>

      <footer className="footer footer-center p-6 bg-base-200 text-base-content mt-16">
        <p className="text-sm opacity-60">
          AI for Teachers — A professional development resource for K–12 educators
        </p>
      </footer>
    </div>
  );
}
