import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';
import { FaReact, FaFigma, FaGitAlt } from 'react-icons/fa';
import { DiJavascript1, DiCss3, DiHtml5 } from 'react-icons/di';
import { BsBarChart } from 'react-icons/bs'; // Ensure `react-icons` is installed
import { ReactComponent as ROS2Icon } from '../assets/ROS2.svg';

const Skills = () => {
  const skills = [
    {
      category: "Robotic",
      skills: [
        { name: "ROS/ROS2", percentage: 90,},
        { name: "Nav2", percentage: 85,},
        { name: "AprilTag", percentage: 88,},
        { name: "VSLAM", percentage: 95,},
      ],
      color: "#ffc107",
    },
    {
      category: "Software Development",
      skills: [
        { name: "C++", percentage: 85},
        { name: "Python", percentage: 80,},
        { name: "MATLAB", percentage: 75,},
      ],
      color: "#6a1b9a",
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", percentage: 85,},
        { name: "VS Code", percentage: 90,},
        { name: "Linux", percentage: 88,},
        { name: "Chrome DevTools", percentage: 88,},
      ],
      color: "#03a9f4",
    },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <motion.div
            className="skills-category"
            key={index}
            style={{ borderColor: category.color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="category-header">
              {category.icon}
              <h3 className="category-title">{category.category}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-label">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="progress-bar-container">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      style={{
                        backgroundColor: category.color,
                      }}
                    />
                  </div>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
