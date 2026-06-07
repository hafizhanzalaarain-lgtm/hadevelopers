import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Pricing', '/pricing'],
  ['Reviews', '/reviews'],
  ['Clients', '/clients'],
  ['Contact', '/contact'],
  ['Order', '/order']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <span>HA</span>
        <strong>HA Developers</strong>
      </Link>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <button className="icon-btn" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
