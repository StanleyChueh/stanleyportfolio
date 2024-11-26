import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/ProjectDetail.css';

const MultiMapNavigation = () => {
  return (
    <motion.div
      className="project-detail-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <header className="project-header">
        <h1>Boston Dynamics Spot</h1>
        <p>
          This project focuses on implementing Boston Dynamics' Spot robot for automated inspection tasks in industrial environments. Under strict cybersecurity regulations, we have developed an advanced automated site inspection and remote monitoring system. The system enables autonomous tasks and real-time monitoring in industrial environments, bringing significant operational benefits and enhancing workplace safety.
        </p>
      </header>

      {/* Image Section */}
      <div className="main-image-container">
        <img
          src="/spot_navigation_outdoor.jpg" // Replace with your actual image path
          alt="Spot robot in action"
          className="main-image"
        />
      </div>

      {/* Lidar Localization Section */}
      <section className="section-container">
        <h2>Learning Progress</h2>
        <p>
          Spot uses an onboard LiDAR scanner to scan the surrounding environment in real time, generating precise three-dimensional point cloud data. The program then utilizes real-time data to predict obstacles and update paths to accommodate dynamic environments. Through the NDT (Normal Distributions Transform) algorithm, Spot can accurately calculate its position and orientation in space.
        </p>
        <div className="image-gallery">
          <img
            src="/turtlebot.png" // Replace with actual image path
            alt="Lidar localization example 1"
            className="gallery-image"
          />
          <img
            src="/lidar_image_2.jpg" // Replace with actual image path
            alt="Lidar localization example 2"
            className="gallery-image"
          />
        </div>
      </section>

      {/* Map Switching Section */}
      <section className="section-container">
        <h2>Switch Map System</h2>
        <p>
          To address the challenge of loading complex maps in large factory environments, we developed a map switching system that utilizes Spot’s APIs to seamlessly transition between various stored map files. The system automatically switches corresponding maps based on Spot's current location, which is determined by predefined paths within environments. This approach ensures optimal coverage and navigation throughout industrial spaces.
        </p>
        <div className="diagram-container">
          <img
            src="/map_switching_diagram.jpg" // Replace with your diagram image path
            alt="Map switching system diagram"
            className="diagram-image"
          />
        </div>
      </section>

      {/* Video Section */}
      <section className="section-container">
        <h2>Video</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/cTmAIjYQQr8" // Replace with your actual YouTube video link
            title="Spot Map Switch System"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

        {/* Map Switching Section */}
        <section className="section-container">
            <h2>Sim To Real</h2>
                <p>
                    Isaac Sim spot navigation, and obstacle avoidance test.                
                </p>
                <div className="diagram-container">
                <img
                    src="/Isaac_Sim_Spot_Navigation.png" // Replace with your diagram image path
                    alt="Map switching system diagram"
                    className="diagram-image"
                />
            </div>
        </section>
    </motion.div>
  );
};

export default MultiMapNavigation;
