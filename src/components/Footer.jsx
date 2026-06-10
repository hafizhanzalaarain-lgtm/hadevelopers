import { Link } from "react-router-dom";
import { company, navLinks, services } from "../data/seed";
import { useLanguage } from "../lib/i18n.jsx";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <img className="brand-logo" src="/logo.png" alt="HA Developers logo" />
            <strong>HA Developers</strong>
          </Link>
          <p>{company.tagline}. Premium websites, apps, SEO, digital marketing, branding, and graphic design for ambitious businesses.</p>
        </div>
        <div>
          <h3>{t.footer.services}</h3>
          {services.slice(0, 6).map((service) => (
            <Link key={service.id} to={`/services/${service.id}`}>{service.title}</Link>
          ))}
        </div>
        <div>
          <h3>{t.footer.company}</h3>
          {navLinks.slice(1, 7).map((link) => (
            <Link key={link.path} to={link.path}>{link.label}</Link>
          ))}
          <Link to="/privacy-policy">{t.footer.privacy}</Link>
        </div>
        <div>
          <h3>{t.footer.contact}</h3>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.phone}`}>{company.phone}</a>
          <a href={`https://wa.me/${company.whatsapp}`}>WhatsApp</a>
          <p>{company.hours}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HA Developers. All rights reserved.</span>
        <span>{t.footer.line}</span>
      </div>
    </footer>
  );
}
