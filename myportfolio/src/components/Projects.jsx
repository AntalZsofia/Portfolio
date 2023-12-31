//import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="flex">
        
          <h1 className="project-header">
            Apps I've Built
          </h1>
          <p className="project-description">
            this are my projects I've built during my study at Codecool.
          </p>
        </div>
        <div className="flex">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="project">
              <div className="flex">
                <img
                  alt="gallery"
                  src={project.image}
                />
                <div className="project-details">
                  <h2>
                    {project.title}
                  </h2>
                  <h1>
                    technologies: {project.technologies}
                  </h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}