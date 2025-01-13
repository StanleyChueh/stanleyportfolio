import React from 'react';
import '../../styles/RoboticVision.css';

const projects = [
  {
    title: 'AprilTag Follower',
    description:
      "This project uses AprilTag detection and multi-robot control to enhance warehouse and logistics operations. \n\nRobots can form teams for specific tasks or regroup for larger missions, enabling flexible, efficient, and scalable solutions for dynamic and complex workflows..",
    video: 'https://www.youtube.com/embed/G7uM_Zrr7wo', // Add video URL here
  },
  {
    title: 'Object Detection & Obstacle Avoidance',
    description:
      'This project focuses on object detection and obstacle avoidance using a Turtlebot. \n\nThe robot explores the map, avoids obstacles, and actively reroutes when needed. If a human is detected, it adjusts its behavior accordingly.',
    video: 'https://www.youtube.com/embed/sTnDYR7xIf0', // Add video URL here
  },
  {
    title: 'VSLAM',
    description:
      'Visual Simultaneous Localization and Mapping (VSLAM) is crucial for implementing robot navigation without relying on LiDAR. \n\nThe following two videos demonstrate VSLAM performance using different approaches: one showcases Isaac ROS VSLAM by NVIDIA, and the other features RTAB-Map SLAM by IntRoLab.',
    videos: [
      'https://www.youtube.com/embed/p4SCeYuSRyI', // Left video
      'https://www.youtube.com/embed/e425LBQ4jrI', // Right video
    ],
  },
  {
    title: 'Visual Navigation',
    description:
      'Using Isaac ROS VSLAM(visual odometry), and with fixed AprilTag to realize visual navigation(robot made by City Science Lab@Taipei)',
    video: 
      'https://www.youtube.com/embed/X7kAB2d0PGs', 
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
          video={project.video} // Single video
          videos={project.videos} // Multiple videos
        />
      ))}
    </div>
  );
};

const Section = ({ title, description, mainImage, gallery, video, videos }) => (
  <section className="section-container">
    <div className="content-header">
      <h2>{title}</h2>
      {/* Split description into paragraphs */}
      {description.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    {/* Single Video */}
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

    {/* Two Videos for VSLAM */}
    {videos && (
      <div className="videos-container">
        {videos.map((videoUrl, index) => (
          <iframe
            key={index}
            className="responsive-iframe"
            src={videoUrl}
            title={`${title} Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
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

