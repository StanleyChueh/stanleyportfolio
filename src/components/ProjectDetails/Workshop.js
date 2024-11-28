import React from 'react';
import '../../styles/Workshop.css';

const projects = [
  {
    title: "International Robotic Competition",
    description: "This was an 8-day international intercollegiate robotics workshop. Team members included students from Japan, Thailand, Vietnam, and the United States. \n\nWe had to build our own robot from scratch, which needed to autonomously explore its environment, detect red balls within the environment, grab them, and throw them out of the field. \n\nWe were required to handle everything from mechanical design to sensors and robot control. My responsibility was focused on robot control and the sensor system.",
    images: [
      '/PBL_1.jpg', // Left GIF
      '/PBL_2.JPG', // Right GIF
    ],
  },
  {
    title: 'International Industrial Workshop',
    description:
     'I contributed to the device\'s structural design and proposed AI functionalities for human-machine interaction. \n\nThis experience was valuable as it involved collaborating with an industry partner to align with market demands and refine ideas through direct discussions with company representatives.',
    image: '/PBL_3.jpg', // Single image for this project
  },
];

const Workshop = () => {
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
          image={project.image} // Pass the single image
        />
      ))}
    </div>
  );
};

const Section = ({ title, description, images, image }) => {
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

      {/* For International Robotic Competition: Show two images and GIF */}
      {title === "International Robotic Competition" && images && images.length === 2 && (
        <>
          <div className="gif-container">
            <img src={images[0]} alt={`${title} Image Left`} className="gif" />
            <img src={images[1]} alt={`${title} Image Right`} className="gif" />
          </div>
          <div className="gif-below-container">
            <img
              src="/2023_PBL.gif" // Path to the GIF
              alt={`${title} GIF`}
              className="gif-below"
            />
          </div>
        </>
      )}

      {/* For International Industrial Workshop: Show description and single image */}
      {title === "International Industrial Workshop" && image && (
        <div className="single-image-container">
          <img
            src={image} // Path to the single image
            alt={`${title} Image`}
            className="single-image"
          />
        </div>
      )}
    </section>
  );
};



export default Workshop;
