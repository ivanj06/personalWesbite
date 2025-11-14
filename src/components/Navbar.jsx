import React, { useState } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'affiliations', label: 'Affiliations' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <img src="/logo.png" alt="Ivan Jauregui" className="site-logo" onError={(e) => e.target.style.display = 'none'} />
            <span className="logo-text">Ivan Jauregui</span>
          </a>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </a>
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

