import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="#aboutme" className="nav__link">
        About Me
      </a>
      <a href="#projects" className="nav__link">
        Projects
      </a>
      <a href="#contact" className="nav__link">
        Contact
      </a>
    </nav>
  );
};
export { NavBar as default };
