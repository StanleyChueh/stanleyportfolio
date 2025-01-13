import React from 'react';
import '../../styles/MultiMapNavigation.css';

const projects = [
  {
    title: "How to deal with Large-scale map robot navigation?",
    description:
      "In this project, we separate map into severals maps, and use Nav2 map_server/load_map to implement the map-switching functionality. \n\nBy leveraging feedback topics during navigation, such as \"goal reached,\" \"initial pose sent,\" and \"map load finished,\" we utilize ROS2 actions to achieve autonomous multi-map navigation.",
    images: [
      '/nav_to_pose.gif', // Left GIF
      '/load_map.gif', // Right GIF
    ],
    image:'/AMCL.png',
    videos: [
      'https://www.youtube.com/embed/cTmAIjYQQr8',
      'https://www.youtube.com/embed/v5z_KcWyCbo',
    ],
  },  
  {
    title: 'NVIDIA Isaac Sim',
    description:
      'NVIDIA Isaac Sim provides a simulation platform that enables users to test and simulate robotic systems before deploying them in real-world scenarios. \n\nThe following videos, one is showcasing different path planning algorithms applied to the SPOT robot, while the other one is demonstrating robot navigation in an actual factory environment.',
    videos: [
      'https://www.youtube.com/embed/O-7v5eyrMkY',
      'https://www.youtube.com/embed/FzWhISa2ttQ',
    ],
  }
];

const MultiMapNavigation = () => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <Section
          key={index}
          title={project.title}
          description={project.description}
          video={project.video} // Single video
          videos={project.videos} // Multiple videos
          images={project.images} // Pass the array of GIFs
          image={project.image}
        />
      ))}
    </div>
  );
};

const Section = ({ title, description, video, videos, images, image }) => {
  const paragraphs = description.split('\n').filter((paragraph) => paragraph.trim() !== '');

  return (
    <section className="section-container">
      <div className="content-header">
        <h2>{title}</h2>
        <div className="description-container">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="description-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {title === 'NVIDIA Isaac Sim' && videos && videos.length > 0 && (
    <div className="videos-container">
      {videos.map((videoUrl, index) => (
        <iframe
          key={index}
          className="responsive-iframe"
          src={videoUrl}
          title={`${title} Video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  )}

          
      {/* Display Multiple GIFs side by side if available */}
      {images && images.length === 2 && (
        <div className="gif-container">
          <img src={images[0]} alt={`${title} GIF Left`} className="gif" />
          <img src={images[1]} alt={`${title} GIF Right`} className="gif" />
        </div>
      )}

    {videos && title === "How to deal with Large-scale map robot navigation?" && (
      <>
        {videos.map((videoUrl, index) => (
          <div key={index} className="video-section">
            <div className="subtitle-container">
              <h3>
                {index === 0
                  ? "How about make it autonomously?"
                  : "How to improve it?"}
              </h3>
            </div>
            {index === 0 && (
            <div className="video-container-center">
              {/* Video for "How about make it autonomously?" */}
              <iframe
                src={videoUrl}
                title={`${title} Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="responsive-iframe"
              ></iframe>
            </div>
            )}
            {index === 1 && image && (
            <div className="image-video-container">
              {/* Image on the left */}
              <div className="image-container-left">
                <img
                  src={image}
                  alt="AMCL Visualization"
                  className="amcl-image"
                />
              </div>
              
              {/* Video on the right */}
              <div className="video-container-right">
                <iframe
                  src={videoUrl}
                  title={`${title} Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </div>
            </div>
          )}
          </div>
        ))}
      </>
    )}




    </section>
  );
};


export default MultiMapNavigation;
