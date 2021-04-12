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
      <h2 className="section__title">PROJECTS</h2>
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
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              at molestie diam. Mauris aliquam non urna dapibus dignissim.
              Maecenas sit amet quam nec sem ornare commodo vitae sit amet nunc.
              Fusce maximus.
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
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              at molestie diam. Mauris aliquam non urna dapibus dignissim.
              Maecenas sit amet quam nec sem ornare commodo vitae sit amet nunc.
              Fusce maximus.
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
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              at molestie diam. Mauris aliquam non urna dapibus dignissim.
              Maecenas sit amet quam nec sem ornare commodo vitae sit amet nunc.
              Fusce maximus.
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
