import React from 'react';
import '../../styles/ImitationLearning.css';

const projects = [
  {
    title: 'Imitation Learning LeRobot',
    description:
      "This project focus on imitation learning by LeRobot framework with Koch robot and Franka emika panda.",
    images: ['lerobot_classification.gif'] // Add video URL here
  },
  {
    title: 'How to do ?',
    description:
      'LeRobot employs the Real2Real framework during training, enabling the user to teleoperate a follower arm via a leader arm while collecting real camera images and corresponding robot states',
    images: [
      'LeRobot_data_collection.gif', // CHAMP
    ],
  },
  {
    title: 'Action Chunking Transformer(ACT)',
    description:
      'LeRobot uses ACT for default policy training. \n\nUnlike BC or BC-RNN, it is better suited for handling long-horizon tasks.',
    images: [
      'LeRobot_drawer.gif', // CHAMP
    ],
  },
  {
    title: 'LeRobot with Franka',
    description:
      'LeRobot provides several robots by default, but not the Franka Emika Panda. \n\n Therefore, we aim to integrate the Franka Emika Panda into the LeRobot training framework.',
    images: ['franka_robot.png'],
  },
  {
    title: 'How to do ?',
    description:
      'To collect data in real-world settings using the Franka Emika robot, I leverage the OpenTeleVision framework developed by MIT and UCSD.',
    images: [
      'Open_television.gif', // CHAMP
    ],
  },
  {
    title: 'Precise pick-and-place task',
    description:
      'To address the limitation of the Koch robot in executing precise tasks, we use the OpenTeleVision framework with the Franka robotic arm.',
    images: [
      'open_teleop.gif', 'open_teleop_3.gif'// CHAMP
    ],
  },
  {
    title: 'Imitation Learning result',
    description:
      '            Coming soon...',
    // images: [
    //   'open_teleop.gif', 'open_teleop_3.gif'// CHAMP
    // ],
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
