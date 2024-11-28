import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link correctly
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav className="navbar">
      <div className="sc-logo">
        <Link to="/" onClick={closeMenu}>SC.dev</Link> {/* Link to home page */}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
