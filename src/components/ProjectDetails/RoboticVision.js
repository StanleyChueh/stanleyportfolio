import React from 'react';
import '../../styles/RoboticVision.css';

const projects = [
  {
    title: 'AprilTag Follower',
    description:
      "This project focuses on implementing Boston Dynamics' Spot robot for automated inspection tasks in industrial environments. Under strict cybersecurity regulations, we have developed an advanced automated site inspection and remote monitoring system. This system aims to enhance automation levels and monitoring efficiency in industrial environments, bringing significant operational benefits and competitive advantages to enterprises.",
    video: 'https://www.youtube.com/embed/G7uM_Zrr7wo', // Add video URL heres
  },
  {
    title: 'Object Detection & Obstacle Avoidance',
    description:
      'Spot uses its onboard LiDAR sensor to scan the surrounding environment in real-time, generating precise three-dimensional point cloud data. The system compares these real-time collected 3D point cloud information with pre-established environmental maps. Through the 3D NDT (Normal Distributions Transform) algorithm, Spot can accurately calculate its position and orientation in space.',
    video: 'https://www.youtube.com/embed/sTnDYR7xIf0', // Add video URL here
    gallery: [
      { src: '/lidar_image_1.jpg', alt: 'Lidar Image 1' },
    ],
  },
  {
    title: 'VSLAM',
    description:
      'Spot uses its onboard LiDAR sensor to scan the surrounding environment in real-time, generating precise three-dimensional point cloud data. The system compares these real-time collected 3D point cloud information with pre-established environmental maps. Through the 3D NDT (Normal Distributions Transform) algorithm, Spot can accurately calculate its position and orientation in space.',
    video: 'https://www.youtube.com/embed/e425LBQ4jrI', // Add video URL here
    gallery: [
      { src: '/lidar_image_1.jpg', alt: 'Lidar Image 1' },
    ],
  },
];

const RoboticVision = () => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <Section
          key={index}
          title={project.title}
          description={project.description}
          mainImage={project.mainImage}
          gallery={project.gallery}
          video={project.video} // Pass the video prop
        />
      ))}
    </div>
  );
};

const Section = ({ title, description, mainImage, gallery, video }) => (
  <section className="section-container">
    <div className="content-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    {video && (
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src={video}
          title={`${title} Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}

    {mainImage && (
      <div className="main-image-container">
        <img src={mainImage.src} alt={mainImage.alt} className="main-image" />
      </div>
    )}

    {gallery && (
      <div className="gallery-container">
        {gallery.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} className="gallery-image" />
        ))}
      </div>
    )}
  </section>
);

export default RoboticVision;

