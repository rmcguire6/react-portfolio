import React from "react";
const Project = (props) => {
  return (
    <div className="project__container">
      <h3 className="text">{props.title}</h3>
      <br />
      <div className="project__links">
        <a href={props.live} className="nav__link">
          Live
        </a>
        <a href={props.repo} className="nav__link">
          GitHub
        </a>
      </div>
    </div>
  );
};
export { Project as default };
