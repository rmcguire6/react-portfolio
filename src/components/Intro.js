import React from "react";
import NavBar from "./NavBar";
const Intro = () => {
  return (
    <section className="section">
      <div id="intro">
        <div className="intro__container">
          <header className="header">
            <h1>
              <span className="header__text">Hi, I'm Regina</span>
            </h1>
            <h3>
              <span className="header__text">
                Let's create beauty together.
              </span>
            </h3>
          </header>
          <NavBar />
        </div>
      </div>
    </section>
  );
};
export { Intro as default };
