import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { company } from '../data/seed.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand"><span>HA</span><strong>HA Developers</strong></div>
          <p>Premium websites, Android apps, digital growth, visual branding, and IT training for ambitious businesses.</p>
          <div className="socials">
            <a href={company.socials.facebook} aria-label="Facebook"><Facebook size={18} /></a>
            <a href={company.socials.instagram} aria-label="Instagram"><Instagram size={18} /></a>
            <a href={company.socials.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={company.socials.youtube} aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/clients">Our Clients</Link>
          <Link to="/reviews">Reviews</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p><Phone size={16} /> {company.phone}</p>
          <p><Mail size={16} /> {company.email}</p>
          <p><MapPin size={16} /> {company.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HA Developers. All rights reserved.</span>
        <Link className="powered-link" to="/admin">Powered by HA Developers</Link>
      </div>
    </footer>
  );
}
