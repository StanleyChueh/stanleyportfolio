import React from 'react';
import '../../styles/RobotNavigationStudy.css';

const projects = [
  {
    title: "Robot Navigation Study",
    description: "This projects aims to study robot navigation without using Nav2.",
    images: [
      '/A_star.gif', // Left GIF
      '/Hybrid_a_star.gif', // Right GIF
    ],
  },
  {
    title: 'Replanning',
    description:
    "For handling obstacle avoidance ability, I use /scan data for dynamic re-planning",
    image: '/replan.gif', // Single image for this project
  },
  {
    title: 'Costmap-based Navigation',
    description:
    "For better dynamic obstacle handling, I add costmap in it.",
    image: '/Costmap_based_navigation.gif', // Single image for this project
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
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="description-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Render content for "Robot Navigation Study" */}
      {title === "Robot Navigation Study" && images && images.length === 2 && (
        <>
          <div className="top-gif-container">
            <img src="/RRT.gif" alt={`${title} Top GIF`} className="top-gif" />
          </div>
          <div className="image-description">
            <p>This gif shows RRT algorithm with Turtlebot3 in Gazebo.</p>
          </div>
          <div className="gif-container">
            <img src={images[0]} alt={`${title} Image Left`} className="gif" />
            <img src={images[1]} alt={`${title} Image Right`} className="gif" />
          </div>
          <div className="image-description">
            <p>These two images show the difference between A* and Hybrid A*.</p>
          </div>
        </>
      )}

      {/* Render content for "Costmap-based Navigation" */}
      {title === "Replanning" && image && (
        <>
          <div className="single-image-container">
            <img
              src={image}
              alt={`${title} GIF`}
              className="single-image"
            />
          </div>
        </>
      )}

      {/* Render content for "Costmap-based Navigation" */}
      {title === "Costmap-based Navigation" && image && (
        <>
          <div className="single-image-container">
            <img
              src={image}
              alt={`${title} GIF`}
              className="single-image"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Workshop;
