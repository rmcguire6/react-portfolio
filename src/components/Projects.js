import React from "react";
import Project from "./Project";
import projects from "../data/projects";
const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section__header">
        <h2 className="text">PROJECTS</h2>
      </div>
      <div className="projects__display text">
        {projects.map((project) => (
          <Project
            key={project.title}
            className="project__container"
            title={project.title}
            live={project.live}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects as default };
