import React, { useEffect, useState } from "react"; // Consolidated imports
import Navbar from "./components/Navbar"; // Navigation Bar
import About from "./components/About";   // About Section
import Resume from "./components/Resume"; // Resume Section
import Portfolio from "./components/Portfolio"; // Portfolio Section
import Contact from "./components/Contact"; // Contact Section
import AOS from "aos";
import "aos/dist/aos.css";

// Back to Top Button Component
const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          padding: "10px 15px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ↑ Back to Top
      </button>
    )
  );
};

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* About Section */}
      <section id="about" data-aos="fade-up">
        <About />
      </section>

      {/* Resume Section */}
      <section id="resume" data-aos="fade-up">
        <Resume />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" data-aos="fade-up">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Stanley Chueh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
