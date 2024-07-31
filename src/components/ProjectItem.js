import React from "react";
import PropTypes from "prop-types";

function ProjectItem({name, about, technologies = [] }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

ProjectItem.defaultProps = {
  technologies: [],
};

export default ProjectItem;
