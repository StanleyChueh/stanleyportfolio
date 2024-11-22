import React from "react";

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "40px 20px" }}>
      <h2>Projects</h2>
      <div style={{ display: "grid", gap: "20px" }}>
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h3>Project 1: AI </h3>
          <p>A tool that helps users perform natural language tasks like summarization and chat-based interactions.</p>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h3>Project 2: Portfolio Website</h3>
          <p>This professional portfolio showcases my projects, skills, and experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
