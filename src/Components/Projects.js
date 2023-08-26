import React, { useState } from "react";
import "./Components.css";
import {
 FaLink
  } from "react-icons/fa";

const ProjectCard = ({ name, link, image }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <>
      <div
        className={`project-card ${hovered ? "hovered" : ""}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <img
          style={{ borderRadius: "4px" }}
          src={image}
          alt={`Project: ${name}`}
        />
        {hovered && (
          <div className="project-details">
            <span className="project-name">{name}</span>
            <a className="project-link" href={link}><FaLink className="svgss" /></a>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
