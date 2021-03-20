import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faGithub, faLinkedin);

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="section__title">CONTACT ME</h2>
      <p>name: Regina Mc Guire</p>
      <a href="mailto: reginamcguire16@gmail.com" class="contact__link">
        reginamcguire16@gmail.com
      </a>
      <ul class="social-list">
        <li class="social-list__item">
          <a href="https://github.com/rmcguire6" class="social-list__link">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li class="social-list__item">
          <a
            href="https://www.linkedin.com/in/regina-mcguire-14352a180/"
            class="social-list__link"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export { Contact as default };
