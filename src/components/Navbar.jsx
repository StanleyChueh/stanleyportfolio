import React from "react";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px 20px" }}>
      <h1>Stanley Chueh</h1>
      <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
        <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
        <li><a href="#projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a></li>
        <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
