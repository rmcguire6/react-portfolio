import React from "react";
import programmer from "../images/woman.jpeg";
const Intro = () => {
  return (
    <>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro light">
          Hi, I am <span className="bold">Regina McGuire</span>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Full Stack React Developer
        </p>
        <img src={programmer} alt="a programmer" className="intro__img" />
      </section>
    </>
  );
};
export { Intro as default };
