import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'certifications', label: 'Certifications', path: '/certifications' },
    { id: 'leadership', label: 'Leadership', path: '/leadership' },
    { id: 'work', label: 'Work History', path: '/work' },
    { id: 'affiliations', label: 'Affiliations', path: '/affiliations' },
    { id: 'hobbies', label: 'Hobbies', path: '/hobbies' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/headshot.jpg" alt="Ivan Jauregui" className="site-logo" onError={(e) => e.target.style.display = 'none'} />
            <span className="logo-text">Ivan Jauregui</span>
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.path)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

