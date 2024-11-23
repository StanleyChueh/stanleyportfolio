import React, { useState } from "react";

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    <div id="portfolio" style={{ padding: "20px" }}>
      <h2>Portfolio</h2>
      <p>Here are some of the projects I have worked on:</p>

      <div>
        <h3 onClick={() => toggleProject("project1")}>Project 1: Multi-map Navigation</h3>
        {expandedProject === "project1" && (
          <p>
            In this project, I aimed to navigate through multiple maps because in
            some cases, the map is too large to load.
          </p>
        )}
      </div>

      <div>
        <h3 onClick={() => toggleProject("project2")}>Project 2: AprilTag Application</h3>
        {expandedProject === "project2" && (
          <p>
            In this project, I showcased the usage of AprilTag and how it helped
            me in multiple projects.
          </p>
        )}
      </div>

      <div>
        <h3 onClick={() => toggleProject("project3")}>Project 3: International Robotic Competition</h3>
        {expandedProject === "project3" && (
          <p>
            In this project, I represented Taipei Tech in an international
            competition.
          </p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
