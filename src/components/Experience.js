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
            I build solo and team projects using various languages including
            Javascript and Python. I use various frameworks including React,
            Flask, and Django. I use databases and ORM's including PostgreSQL,
            MongoDB, Mongoose, and SQLAlchemy. I create back end applications
            using Node. I use Agile methodology and various tools including
            Trello, Zenhub, and Slack.
          </p>
        </div>
        <div className="experience">
          <h3>Facilitator</h3>
          <p>
            I develop new applications for members' use. I help code review
            members' solo projects. I help onboard new members. I also answer
            questions in our Discord community.
          </p>
        </div>
        <div className="experience">
          <h3>Tutor</h3>
          <p>
            I instructed students on linear algebra, calculus, and other
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
