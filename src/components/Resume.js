import React from 'react';
import '../styles/Resume.css';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p>
        Enthusiast on the future of AI and robotic
      </p>

      {/* Experience Section */}
      <div className="resume-category">
        <h3>
          <FaBriefcase /> Experience
        </h3>
        <div className="resume-card">
          <h4>City Science Lab@Taipe UROP(Undergraduate Research Opportunities Program)</h4>
          <span>Sep 2023 - Present</span>
          <p>Develop robotic software,including ROS2,Nav2,NVIDIA Omniverse Isaac Sim</p>
        </div>
        <div className="resume-card">
          <h4>InstAI Inc. Assistant Engineer</h4>
          <span>Aug 2023 - Nov 2024</span>
          <p>Developed AI models on various Edge devices and model optimization</p>
        </div>
      </div>

      {/* Education Section */}
      <div className="resume-category">
        <h3>
          <FaGraduationCap /> Education
        </h3>
        <div className="resume-card">
          <h4>Bachelor's in  Electrical Engineering</h4>
          <span>Sep 2021 - Jun 2025</span>
          <p>National Taipei University of Technology(NTUT) Overall GPA:3.68/4.0</p>
        </div>
      </div>

      {/* Key Skills Section */}
      <div className="resume-category">
        <h3>Key Skills</h3>
        <div className="skills-grid">
          <span>C++</span>
          <span>Python</span>
          <span>ROS/ROS2</span>
          <span>Robotic Vision</span>
          <span>Robot Navigation</span>
          <span>SLAM/VSLAM</span>
          <span>Javascript</span>
          <span>Git</span>
        </div>
      </div>

      {/* Download Button */}
      <div className="download-resume">
        <a href="/path-to-your-resume.pdf" download className="download-button">
          <FaDownload /> Download Resume
        </a>
        <p>PDF Format - Last updated 2024</p>
      </div>
    </section>
  );
};

export default Resume;
