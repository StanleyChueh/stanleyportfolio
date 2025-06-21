import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '../variants';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';
import '../styles/About.css';
import { FaYoutube, FaGithub, FaLinkedin  } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: "Bachelor's in Electrical Engineering",
      organization: "National Taipei University of Technology (NTUT) Overall GPA:3.7/4.0",
      description: "Focus on robotics and AI systems",
      period: "2021/9 - 2025/6",
    },
    {
      title: "Master Program in Electrical Engineering",
      organization: "National Taipei University of Technology (NTUT)",
      description: "Focus on robotics and AI systems",
      period: "2025/9 - ",
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
    // First item from each category
    const firstEdu = educationData[0];
    const firstContest = competitionData[0];
    const firstExp = experienceData[0];
  
    // Determine the max number of blocks across all categories
    const maxBlocks = Math.max(educationData.length, competitionData.length, experienceData.length);
  
    // Get additional items based on the active tab
    const additionalItems =
      activeTab === "education"
        ? educationData.slice(1)
        : activeTab === "contests"
        ? competitionData.slice(1)
        : experienceData.slice(1);
  
    return (
      <>
        {/* First Block - Always Visible */}
        <div className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <h4>
              {activeTab === "education"
                ? firstEdu.title
                : activeTab === "contests"
                ? firstContest.title
                : firstExp.title}
            </h4>
            <p>
              {activeTab === "education"
                ? firstEdu.organization
                : activeTab === "contests"
                ? firstContest.organization
                : firstExp.organization}
            </p>
            <p>
              {activeTab === "education"
                ? firstEdu.description
                : activeTab === "contests"
                ? firstContest.description
                : firstExp.description}
            </p>
            <span>
              {activeTab === "education"
                ? firstEdu.period
                : activeTab === "contests"
                ? firstContest.period
                : firstExp.period}
            </span>
          </div>
        </div>
  
        {/* Additional Items - Appear at Bottom */}
        {additionalItems.map((item, index) => (
          <motion.div
            key={`extra-${index}`}
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
        ))}
  
        {/* Add hidden placeholders to keep height consistent */}
        {activeTab === "education" &&
          Array(maxBlocks - educationData.length)
            .fill()
            .map((_, i) => (
              <div key={`placeholder-${i}`} className="timeline-item placeholder"></div>
            ))}
      </>
    );
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

          {/* Social Links inside the intro-box */}
          <div className="social-links">
            <a href="https://youtube.com/@stanley_chueh?si=i4F_Qs6TSJjbRfoo" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon youtube" />
            </a>
            <a href="https://github.com/StanleyChueh" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon github" />
            </a>
            <a href="https://www.linkedin.com/in/stanley-chueh-239421303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
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
