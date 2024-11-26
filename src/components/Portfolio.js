import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Portfolio.css';

const projectData = [
  {
    id: 1,
    title: 'Multi-map Navigation',
    description: 'Robot navigation through different maps',
    tags: ['ROS2', 'Navigation2', 'NVIDIA Isaac Sim','Spot/Turtlebot', 'AprilTag'],
    category: 'Robotic',
    detailPage: '/projects/multi-map-navigation',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Personal portfolio website with interactive features',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    category: 'Others',
    detailPage: '/projects/portfolio-website',
  },
  {
    id: 3,
    title: 'Robotic Vision',
    description: 'Collaborative task management application',
    tags: ['React', 'Firebase', 'Material-UI'],
    category: 'Robotic',
    detailPage: '/projects/RoboticVision',
  },
  {
    id: 4,
    title: 'Robotic Vision',
    description: 'Collaborative task management application',
    tags: ['React', 'Firebase', 'Material-UI'],
    category: 'Robotic',
    detailPage: '/projects/RoboticVision',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const navigate = useNavigate(); // Initialize navigate

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  const categoryButtons = ['All Projects', 'Robotic', 'Others'];

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Featured Projects</h2>
      <div className="category-buttons">
        {categoryButtons.map((category) => (
          <button
            key={category}
            className={`category-button ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate(project.detailPage)} // Navigate on single click
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Portfolio;
