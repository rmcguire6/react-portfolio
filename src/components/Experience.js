import React from "react";

const Experience = () => {
  return (
    <section className="my-experience" id="myexperience">
      <h2 className="section__title section__title--experience">
        My Experience
      </h2>
      <div className="experiences">
        <div className="experience">
          <h3>Software Engineer</h3>
          <p>
            Programmed React, JS, and Node code to implement full stack web
            applications Developed application logic Pair programmed remotely
            Used Agile methodology
          </p>
        </div>
        <div className="experience">
          <h3>Facilitator</h3>
          <p>
            Develop new sample applications Code review solo projects Answer
            questions in our Discord community.
          </p>
        </div>
        <div className="experience">
          <h3>Tutor</h3>
          <p>
            Instructed students on linear algebra, calculus, and other
            mathematical topics resulting in at least one letter grade
            improvement for over 90% of them.
          </p>
        </div>
      </div>
      <a href="#myprojects" className="btn">
        My Projects
      </a>
    </section>
  );
};
export { Experience as default };
