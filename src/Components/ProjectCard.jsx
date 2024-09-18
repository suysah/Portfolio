import React from "react";
import TechDisplay from "./TechDisplay";

const ProjectCard = ({ name, deployLink, gitHubLink, techStack, info }) => {
  //   const { name, deployLink, gitHubLink, techStack, info } = project;

  //   console.log("sy=tack", project);

  return (
    <div className="project-card">
      <h2>{name}</h2>
      <div className="techDiv">
        {techStack.map((stack, index) => (
          <TechDisplay key={index}> {stack} </TechDisplay>
        ))}
      </div>
      <ul>
        <li> {info} </li>
      </ul>
      <div>
        <a href={gitHubLink} target="blank">
          <p className="click">-- Click for GitHub Repo -- </p>
        </a>
        <a href={deployLink} target="blank">
          <p className="click">-- Click for demo -- </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
