import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, lightTheme, darkTheme } from './ThemeContext'; // Import themes
import '../styles/Navbar.css';
import '../styles/ThemeToggleSwitch.css'; // Import the CSS for the toggle switch

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggle function from context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <div className="sc-logo">
        <Link to="/" onClick={closeMenu} style={{ color: theme.color }}>
          SC.dev
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-line" style={{ backgroundColor: theme.color }}></div>
        <div className="menu-line" style={{ backgroundColor: theme.color }}></div>
        <div className="menu-line" style={{ backgroundColor: theme.color }}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu} style={{ color: theme.color }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu} style={{ color: theme.color }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={closeMenu} style={{ color: theme.color }}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMenu} style={{ color: theme.color }}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/resume" onClick={closeMenu} style={{ color: theme.color }}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu} style={{ color: theme.color }}>
            Contact Me
          </Link>
        </li>
      </ul>
      {/* Theme Switch Slider */}
      <div className="theme-switch-container">
        <label className="theme-switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === lightTheme}
          />
          <span className="slider"></span>
        </label>
        <span style={{ color: theme.color, marginLeft: '10px' }}>
          {theme === darkTheme ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
