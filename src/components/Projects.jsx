import React from "react";
import "../styles/Projects.css";
import projects from "../data/projectData";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-buttons">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.demo} target="_blank">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;