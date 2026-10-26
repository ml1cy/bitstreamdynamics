import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Icon } from "./Icon.jsx";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/directory", label: "Directory" },
  { to: "/projects", label: "Projects" },
];

const FOOTER_LINKS = [...LINKS, { to: "/contact", label: "Contact" }];

const LOGO = "/logos/bitstream-logo-horizontal-transparent-dark-bg.svg";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link bs-btn bs-btn--primary" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="bs-nav" aria-label="Main">
          <Link to="/" className="site-logo">
            <img className="bs-nav__logo" src={LOGO} alt="bitstream" width="136" height="44" />
          </Link>
          <div className="bs-nav__links">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link className="bs-btn bs-btn--primary bs-btn--sm" to="/contact">
            Contact the class
          </Link>
          <button
            type="button"
            className="bs-btn bs-btn--secondary site-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </nav>
        <div id="site-menu" className="site-menu" hidden={!menuOpen}>
          {FOOTER_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <img src={LOGO} alt="bitstream" width="136" height="44" />
            <p className="small">
              The practice network-operations company of the Computer
              Networking class at Kalamazoo KRESA CTE.
            </p>
          </div>
          <nav className="site-footer__links" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <p className="container small site-footer__note">
          A class project, not a business: bitstream doesn&rsquo;t sell internet
          or IT service.
        </p>
      </footer>
    </>
  );
}
