import React from "react";
import regina from "../images/regina.jpg";

const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
      <h1 className="section__title section__title--about">
        Hi, I am <span className="accent">Regina McGuire</span>
      </h1>
      <p className="section__subtitle section__subtitle--about">
        Full Stack Python Developer
      </p>
      <img src={regina} alt="Regina's face" className="about-me__img" />
      <div className="about-me__body">
        <p className="about-me__text">
          My mission as a developer is to improve people's lives through
          beautiful code. I also want to share the benefits I have received from
          learning software development with others.
        </p>
        <p className="about-me__text">
          In university I majored in Computer Mathematics and spent years in
          education. Now I enjoy web development because it allows me to create
          beauty logically, solve problems persistantly, and learn constantly.
        </p>
        <p className="about-me__text">
          I'm currently contributing as both an open-source developer and a
          facilitator at Chingu. As a developer I'm currently writing in Python
          and Javascript. I'm using React and Flask frameworks. As a facilitator
          I help develop new apps, code review solo projects, and onboard new
          members.
        </p>
      </div>
    </section>
  );
};

export { AboutMe as default };
