import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "../src/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Intro />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export { App as default };
