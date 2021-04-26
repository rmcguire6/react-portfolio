import React from "react";
import projects from "../data/projects";
import sound_and_silence from "../images/project-images/sound_and_silence.png";
import spaceships from "../images/project-images/spaceships.png";
import meteorite from "../images/project-images/meteorite.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faGithub);

const Projects = () => {
  return (
    <section className="my-projects" id="myprojects">
      <h2 className="section__title section__title--projects">PROJECTS</h2>
      <p className="section__subtitle section__subtitle--projects">
        A selection of my work
      </p>
      <div className="portfolio">
        <div className="project">
          <img
            src={sound_and_silence}
            alt="sound_and_silence"
            className="project__img"
          />
          <div className="project__desc">
            <h3>{projects[0].title}</h3>
            <p>
              This co-written project explores disability issues related to
              websites. It uses a Flask backend to communicate with the Jira
              templated front end.
            </p>
            <ul className="icon-list">
              <li className="icon-list__item">
                <a className="icon-list__link" href={projects[0].live}>
                  Live Site
                </a>
              </li>
              <li className="icon-list__item">
                <a className="icon-list__link" href={projects[0].repo}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project">
          <img src={spaceships} alt="spaceships" className="project__img" />
          <div className="project__desc">
            <h3>{projects[1].title}</h3>
            <p>
              This solo game was written as a facilitator as a sample project
              for solo projects so development time was capped. It uses a Flask
              back end and an SQLite database to power the gameplay.
            </p>
            <ul className="icon-list">
              <li className="icon-list__item">
                <a className="icon-list__link" href={projects[1].live}>
                  Live Site
                </a>
              </li>
              <li className="icon-list__item">
                <a className="icon-list__link" href={projects[1].repo}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project">
          <img
            src={meteorite}
            alt="meteorite project"
            className="project__img"
          />
          <div className="project__desc">
            <h3>{projects[2].title}</h3>
            <p>
              This React project was submitted for Chingu acceptance. It
              displays the contents of the NASA meteorite database in a
              responsive window.
            </p>
            <ul className="icon-list">
              <li className="icon-list__item">
                <a className="icon-list__link" href={projects[2].live}>
                  Live Site
                </a>
              </li>
              <li className="icon-list__item">
                <a className="icon-list__link" href={projects[2].repo}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Projects as default };
