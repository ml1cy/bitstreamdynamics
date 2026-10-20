import { NavLink, Outlet } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/directory", label: "Directory" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <nav className="nav">
        <NavLink to="/" className="nav-mark" end>
          Bitstream Dynamics
        </NavLink>
        <div className="nav-links">
          {LINKS.slice(1).map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <NavLink className="nav-cta" to="/projects">
          View projects
        </NavLink>
      </nav>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span className="site-footer-mark">Bitstream Dynamics</span>
        <div className="site-footer-links">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <span className="site-footer-note">
          A class project, not a business. Kalamazoo KRESA CTE, Computer Networking.
        </span>
      </footer>
    </>
  );
}
