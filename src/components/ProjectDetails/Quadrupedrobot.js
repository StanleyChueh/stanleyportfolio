import React from 'react';
import '../../styles/Quadrupedrobot.css';

const projects = [
  {
    title: 'Quadruped Robot',
    description:
      "This project focus on quadruped robot Gait study, and human-robot interaction, we utilize open source quaruped robot framework(CHAMP), and also take advantage of Standford Pupper for Gait design.",
    video: 'https://www.youtube.com/embed/S5a2KvDNvhw', // Add video URL here
  },
  {
    title: 'CHAMP',
    description:
      'CHAMP is an open source development framework for building new quadrupedal robots and developing new control algorithms. The control framework is based on "Hierarchical controller for highly dynamic locomotion utilizing pattern modulation and impedance control : implementation on the MIT Cheetah robot".',
    images: [
      '/CHAMP.gif', // CHAMP
    ],
  },
  {
    title: 'Control Block',
    description:
      'This is the main control block of our Quadruped robot framework, it consists four components, a gait scheduler, a stance controller, a swing controller, and an IK model.\n\n  Gait scheduler is responsible for planning which feet should be on the ground(stance), and which sould be moving forward to the next(swing) at any given time. \n\n The stance controller controls the feet on the ground, it adjusts the feet relative to the robot\'s body. \n\n The swing controller picks up the feet that just finished their stance phase, and brings them to their next touchdown location.',
    video: 'https://www.youtube.com/embed/AfdhneXC-ak?start=16',
    image: '/CHAMP_structure.png',
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
          images={project.images} 
        />
      ))}
    </div>
  );
};

const Section = ({ title, description, mainImage, gallery, video, videos, images }) => (
  <section className="section-container">
    <div className="content-header">
      <h2>{title}</h2>
      {/* Split description into paragraphs */}
      {description.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    {/* Image Above Video */}
    {title === 'Control Block' && (
      <div className="image-above-video">
        <img src="/CHAMP_structure.png" alt="Gait Parameters" className="gait-image" />
      </div>
    )}

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

    {/*Two GIFS for human-robot Interactio*/}
    {images && (
      <div className="gif-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`gif-${index}`} className="gif" />
        ))}
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
