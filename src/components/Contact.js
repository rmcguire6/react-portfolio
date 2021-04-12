import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faGithub, faLinkedin);

const Contact = () => {
  return (
    <section className="contact" id="contactme">
      <h2 className="section__title section__title--contact">CONTACT ME</h2>
      <a href="mailto: reginamcguire16@gmail.com" className="contact__link">
        reginamcguire16@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/rmcguire6" className="social-list__link">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/regina-mcguire-14352a180/"
            className="social-list__link"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export { Contact as default };
