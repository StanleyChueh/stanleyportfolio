import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import MultiMapNavigation from './components/ProjectDetails/MultiMapNavigation';
import PortfolioWebsite from './components/ProjectDetails/PortfolioWebsite';
import RoboticVision from './components/ProjectDetails/RoboticVision';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="section-container">
          <Routes>
            {/* Main Sections */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

            {/* Project Details Pages */}
            <Route path="/projects/multi-map-navigation" element={<MultiMapNavigation />} />
            <Route path="/projects/portfolio-website" element={<PortfolioWebsite />} />
            <Route path="/projects/RoboticVision" element={<RoboticVision />} />
            <Route path="/projects/RoboticVision" element={<RoboticVision />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
