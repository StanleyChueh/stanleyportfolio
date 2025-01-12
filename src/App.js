import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import MultiMapNavigation from './components/ProjectDetails/MultiMapNavigation';
import Workshop from './components/ProjectDetails/Workshop';
import RoboticVision from './components/ProjectDetails/RoboticVision';
import ReinforcementLearning from './components/ProjectDetails/ReinforcementLearning';
import RobotNavigationStudy from './components/ProjectDetails/RobotNavigationStudy';

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
            <Route
              path="/projects/multi-map-navigation"
              element={<MultiMapNavigation />}
            />
            <Route
              path="/projects/Workshop"
              element={<Workshop />}
            />
            <Route
              path="/projects/robotic-vision"
              element={<RoboticVision />}
            />
            <Route
              path="/projects/ReinforcementLearning"
              element={<ReinforcementLearning />}
            />
            <Route
              path="/projects/RobotNavigationStudy"
              element={<RobotNavigationStudy />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
