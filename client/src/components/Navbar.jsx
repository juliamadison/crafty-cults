import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import smallIcon from '../assets/smallicon.png';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/how-to-play', label: 'How to Play' },
  { path: '/team', label: 'Team' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/support', label: 'Support' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cultsOpen, setCultsOpen] = useState(false);
  const location = useLocation();

  const isAboutActive =
    location.pathname === '/about' || location.pathname === '/cults';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={smallIcon} alt="Crafty Cults" className="navbar-logo-img" />
        </Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li key="/">
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          {/* About with Cults dropdown */}
          <li className="nav-dropdown-wrapper">
            <Link
              to="/about"
              className={isAboutActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            {/* Mobile toggle */}
            <button
              className="nav-dropdown-toggle"
              aria-label="Toggle Cults menu"
              onClick={() => setCultsOpen(!cultsOpen)}
            >
              ▾
            </button>
            {/* Dropdown — desktop: CSS hover, mobile: cultsOpen state */}
            <div className={`nav-dropdown ${cultsOpen ? 'open' : ''}`}>
              <Link
                to="/cults"
                className={`nav-dropdown-item ${location.pathname === '/cults' ? 'active' : ''}`}
                onClick={() => { setMenuOpen(false); setCultsOpen(false); }}
              >
                Cults
              </Link>
            </div>
          </li>

          {navItems.slice(1).map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
