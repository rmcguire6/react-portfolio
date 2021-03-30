import React from "react";
import projects from "../data/projects";
import sound_and_silence from "../images/project-images/sound_and_silence.png";
import spaceships from "../images/project-images/spaceships.png";
import meteorite from "../images/project-images/meteorite.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faGithub, faLinkedin);

const Projects = () => {
  return (
    <section className="my-projects" id="projects">
      <h2 className="section__title">PROJECTS</h2>
      <p className="section__subtitle section__subtitle--projects">
        A selection of my work
      </p>
      <div className="portfolio">
        <div className="project">
          <img
            src={sound_and_silence}
            alt="project: sound_and_silence"
            className="project__img"
          />
          <div className="social-list">
            <a href={projects[0].live}>Live Site</a>
            <a className="social-list__item" href={projects[0].repo}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src={spaceships}
            alt="project: sound_and_silence"
            className="project__img"
          />
          <div className="social-list">
            <a href={projects[1].live}>Live Site</a>
            <a className="social-list__item" href={projects[1].repo}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src={meteorite}
            alt="project: sound_and_silence"
            className="project__img"
          />
          <div className="social-list">
            <a href={projects[2].live}>Live Site</a>
            <a className="social-list__item" href={projects[2].repo}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Projects as default };
