import React from "react";
import Navbar from "./components/Navbar"; // Navigation Bar
import About from "./components/About";   // About Section
import Projects from "./components/Projects"; // Projects Section
import Contact from "./components/Contact"; // Contact Section

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f4f4f4" }}>
        <p>&copy; {new Date().getFullYear()} Stanley Chueh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
