import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company, navLinks, services } from "../data/seed";
import { useLanguage } from "../lib/i18n.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const primaryLinks = navLinks.filter((link) => ["Home", "About", "Portfolio", "Contact"].includes(link.label));
  const navText = {
    Home: t.nav.home,
    About: t.nav.about,
    Portfolio: t.nav.portfolio,
    Contact: t.nav.contact
  };

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <img className="brand-logo" src="/logo.png" alt="HA Developers logo" />
        <strong>HA Developers</strong>
      </Link>

      <button className="icon-button menu-button" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
        <Menu size={21} />
      </button>

      <nav className={`main-nav ${open ? "is-open" : ""}`}>
        <button className="icon-button close-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X size={21} />
        </button>
        {primaryLinks.slice(0, 2).map((link) => (
          <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)}>
            {navText[link.label] || link.label}
          </NavLink>
        ))}

        <div className="nav-dropdown">
          <NavLink to="/services" onClick={() => setOpen(false)}>{t.nav.services}</NavLink>
          <div className="dropdown-panel services-panel">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <NavLink key={service.id} to={`/services/${service.id}`} onClick={() => setOpen(false)}>
                  <Icon size={16} />
                  <span>{service.title}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        {primaryLinks.slice(2).map((link) => (
          <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)}>
            {navText[link.label] || link.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <select className="language-select" value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Change website language">
          <option value="en">EN</option>
          <option value="ur">UR</option>
          <option value="ar">AR</option>
        </select>
        <a className="btn btn-primary" href={`tel:${company.phone}`}>
          <Phone size={17} /> {t.nav.call}
        </a>
      </div>
    </header>
  );
}
