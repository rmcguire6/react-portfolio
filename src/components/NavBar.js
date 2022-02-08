import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="#aboutme" className="nav__link">
        About Me
      </a>
      <a href="#myprojects" className="nav__link">
        Projects
      </a>
      <a href="#myexperience" className="nav__link">
        Experience
      </a>
      <a href="#contactme" className="nav__link">
        Contact
      </a>
    </nav>
  );
};
export { NavBar as default };
