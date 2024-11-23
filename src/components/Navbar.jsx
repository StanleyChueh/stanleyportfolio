// In Navbar.jsx
import React from 'react';
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
      <h1>Stanley Chueh</h1>
      <Scrollspy items={['about', 'resume', 'portfolio', 'contact']} currentClassName="active" style={{ display: 'flex', listStyleType: 'none', gap: '20px' }}>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Me</a></li>
        <li><a href="#resume" style={{ color: '#fff', textDecoration: 'none' }}>Resume</a></li>
        <li><a href="#portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </Scrollspy>
    </nav>
  );
};

export default Navbar;
