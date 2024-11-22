import React from "react";

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px 20px" }}>
            <h1>Stanley Chueh</h1>
            <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
                <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About Me</a></li>
                <li><a href="#resume" style={{ color: "#fff", textDecoration: "none" }}>Resume</a></li>
                <li><a href="#portfolio" style={{ color: "#fff", textDecoration: "none" }}>Portfolio</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
