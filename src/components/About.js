import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '../variants';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: "Bachelor's in Electrical Engineering",
      organization: "National Taipei University of Technology (NTUT) Overall GPA:3.68/4.0",
      description: "Focus on robotics and AI systems",
      period: "2021/9 - 2025/6",
    },
  ];

  const competitionData = [
    {
      title: "International Robotic Competition",
      organization: "NTUT",
      description: "Represented NTUT EE in an international robotic competition",
      period: "10 Days (2023/8)",
    },
    {
      title: "International Industrial Project Based Learning(PBL) With COMPAL Inc.",
      organization: "NTUT & OIT & KMU",
      description: "Represented NTUT in an international industrial cooperation with COMPAL Inc.",
      period: "June 2024 - Aug 2024",
    },
    {
      title: "IWCE Conference Paper",
      organization: "IWCE",
      description: "Honorable Mention in GenAI Field",
      period: "Dec 2023",
    },
  ];

  const experienceData = [
    {
      title: "Assistant Engineer",
      organization: "City Science Lab @ Taipei Tech",
      description: "Developed robotic software systems",
      period: "Sep 2023 - Present",
    },
    {
      title: "Assistant Engineer",
      organization: "InstAI Inc.",
      description: "Assisted in optimizing AI models and data analysis",
      period: "Aug 2023 - Nov 2024",
    },
  ];

  const renderContent = () => {
    const data =
      activeTab === 'education'
        ? educationData
        : activeTab === 'contests'
        ? competitionData
        : experienceData;

    return data.map((item, index) => (
      <motion.div
        key={index}
        className="timeline-item"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="circle"></div>
        <div className="content">
          <h4>{item.title}</h4>
          <p>{item.organization}</p>
          <p>{item.description}</p>
          <span>{item.period}</span>
        </div>
      </motion.div>
    ));
  };

  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="about-section"
    >
      <h2>About Me</h2>

      {/* Introduction Section */}
      <div className="about-intro">
        <div className="intro-box">
          <h3>AI & Robotic Software Developer</h3>
          <div className="skills">
            <span className="skill-tag">ROS/ROS2</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">C++</span>
          </div>
        </div>
      </div>

      {/* Tabs for Timeline Sections */}
      <div className="journey-tabs">
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >
          <FaGraduationCap /> Education
        </button>
        <button
          className={activeTab === 'contests' ? 'active' : ''}
          onClick={() => setActiveTab('contests')}
        >
          <FaTrophy /> Contests
        </button>
        <button
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >
          <FaBriefcase /> Experience
        </button>
      </div>

      {/* Timeline Content */}
      <div className="timeline-container">{renderContent()}</div>
    </motion.section>
  );
};

export default About;
