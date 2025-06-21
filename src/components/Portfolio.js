import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Portfolio.css';

const projectData = [
  {
    id: 1,
    title: 'Robotic Vision',
    description: 'Robotic vision is a crucial aspect of robot perception, enabling robots to understand their position for further applications.',
    tags: ['Depth camera', 'VSLAM', 'Visual Nav', 'AprilTag'],
    category: 'Robotic',
    detailPage: '/projects/robotic-vision',
    thumbnail: '/thumbnails/apriltag_following.gif' 
  },
  {
    id: 2,
    title: 'Imitation Learning LeRobot',
    description: 'Imitation Learning using Koch robot in LeRobot training framework.',
    tags: ['ACT', 'LeRobot', 'Koch', 'Real2Real', 'Teleoperation'],
    category: 'Robotic',
    detailPage: '/projects/ImitationLearningLeRobot',
    thumbnail: '/thumbnails/LeRobot_drawer.gif' 
  },
  {
    id: 3,
    title: 'Imitation Learning Robomimic',
    description: 'Imitation Learning using Franka Emika Panda in Robomimic training framework.',
    tags: ['Behavior Cloning', 'Franka emika', 'Robomimic', 'Robosuite', 'MimicGen', 'Sim2Real', 'Domain randomization'],
    category: 'Robotic',
    detailPage: '/projects/ImitationLearningRobomimic',
    thumbnail: '/tool_hang.gif' 
  },
  {
    id: 4,
    title: 'Quadruped robot 12-DOF',
    description: 'Study quadruped robot gait generator, and also how to walk more naturally.',
    tags: ['Gait', 'Inverse Kinematic', 'ROS2', 'Human-robot Interaction'],
    category: 'Robotic',
    detailPage: '/projects/Quadrupedrobot',
    thumbnail: 'thumbnails/quadruped_robot.gif' 
  },
  {
    id: 5,
    title: 'Multi-map Navigation',
    description: 'A way to navigate through multiple maps effectively.',
    tags: ['ROS2', 'Navigation2', 'NVIDIA Isaac Sim','Spot/Turtlebot', 'AprilTag'],
    category: 'Robotic',
    detailPage: '/projects/multi-map-navigation',
    thumbnail: '/load_map.gif' 
  },
  {
    id: 6,
    title: 'Robot Navigation Study',
    description: 'Study robot navigation with turtlebot3 without using Nav2',
    tags: ['Path Planning', 'Path Following', 'Gazebo'],
    category: 'Robotic',
    detailPage: '/projects/Robotnavigationstudy',
    thumbnail: '/Costmap_based_navigation.gif' 
  },
  {
    id: 7,
    title: 'International Competition/Workshop',
    description: 'International insights and cooperation with companies and overseas students.',
    tags: ['Communication', 'Industrial cooperation', 'International'],
    category: 'Others',
    detailPage: '/projects/Workshop',
    thumbnail: '/2023_PBL.gif' 
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
            onClick={() => {
              navigate(project.detailPage);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    </motion.section>
  );
};

export default Portfolio;
