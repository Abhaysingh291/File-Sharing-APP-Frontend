import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className='logo' href="/">File Share</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <a className="navele" href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a className="navele" onClick={() => scrollToSection('about')}>About</a>
        </li>
        {/* <li className="navbar-item">
          <a href="/services">Services</a>
        </li> */}
        <li className="navbar-item">
          <a className="navele" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

