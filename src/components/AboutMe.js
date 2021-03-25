import React from "react";
import desert from "../images/SunsetAtZionPark.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Full Stack React Developer
      </p>
      <div className="about_me__body">
        <p>
          My mission as a developer is to improve people's lives. I'm especially
          interested in underserved communities. I want to share the benefits I
          have received through coding.
        </p>
        <p>
          In university I majored in Computer Mathematics and spent years in
          mathematics education. Now I enjoy web development because it allows
          me to create beauty logically, solve problems persistantly, and learn
          new technologies constantly.
        </p>
        <p>
          I'm currently contributing as both an open-source developer and a
          facilitator at Chingu. My current technologies are Javascript, HTML5,
          CSS3, React, Python, Flask, Django, Node, Express, and Postgres. My
          current learning technologies are Next.js and Typescript.
        </p>
      </div>
      <img src={desert} alt="sunset at Zion Park" className="about-me__img" />
    </section>
  );
};

export { AboutMe as default };
