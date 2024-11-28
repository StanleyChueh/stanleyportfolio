import React from 'react';
import '../../styles/RoboticVision.css';

const projects = [
  {
    title: 'Map exloration with Obstacle Avoidance',
    description:
     'This project focuses on map exploration with obstacle avoidance. \n\nBy designing an appropriate reward function, the robot can effectively explore the map while also demonstrating the ability to avoid obstacles.',
    video: 'https://www.youtube.com/embed/F_8VXdsqM_c?', // Add video URL here
  },
  {
    title: 'Reward function',
    description:
      'This project focuses on map exploration with obstacle avoidance. \n\nBy designing an appropriate reward function, the robot can effectively explore the map while also demonstrating the ability to avoid obstacles. \n\nReward function:\n\n\'Collision Penalty\':Strong penalty for collisions detected.\', \n\n\'Proximity Penalty\': Penalties for getting too close to obstacles.\', \n\n\'Movement Incentive\': Rewarding safe forward or backward movement., \n\n\'Turning Reward\':Encouraging turning when obstacles are close.',
    //video: 'https://www.youtube.com/embed/sTnDYR7xIf0', // Add video URL here
    //gallery: [
      //{ src: '/lidar_image_1.jpg', alt: 'Lidar Image 1' },
    //],
  },
];

const ReinforcementLearning = () => {
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

export default ReinforcementLearning;

