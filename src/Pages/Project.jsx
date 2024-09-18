import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = [
  {
    name: "Quizzeria",
    deployLink: "https://quizzeria.vercel.app/",
    techStack: ["reactjs", "html", "css", "API"],
    gitHubLink: "https://github.com/suysah/Quizzeria",
    info: "Quizzeria is an online quiz platform with feature's like mulitiple subjects to select from, time Bounded quiz environment, reviewing submitted answers and more ",
  },
  {
    name: "Portfolio",
    deployLink: "https://portfolio-suysah.vercel.app/",
    techStack: ["reactjs", "html", "css", "Email Js"],
    gitHubLink: "https://github.com/suysah/Portfolio",
    info: "A portfolio website to showcase my skills and Projects. ",
  },

  {
    name: "To-Do-List",
    deployLink: "https://react-to-do-list-inky.vercel.app/",
    techStack: ["reactjs", "html", "css"],
    gitHubLink: "https://github.com/suysah/ReactToDoList",
    info: "It's an app that helps to track our daily activities.",
  },
  {
    name: "Coursera Clone",
    deployLink: "https://coursera-clone-website-final.vercel.app/",
    techStack: ["reactjs", "html", "css"],
    gitHubLink: "https://github.com/suysah/courseraCloneWebsiteFinal",
    info: "Just a basic coursera clone to learn React basics.",
  },
  {
    name: "Password Generator",
    deployLink: "https://suysah.github.io/password-generator/",
    techStack: ["JavaScript", "html", "css"],
    gitHubLink: "https://github.com/suysah/password-generator",
    info: "A random password generator according to user need like including integers, small, Capital alphabet letters, special Character. ",
  },
  {
    name: "Rock-Paper-Scissors",
    deployLink: "https://rock-paper-game-nu.vercel.app/",
    techStack: ["JavaScript", "html", "css"],
    gitHubLink: "https://github.com/suysah/RockPaperGame",
    info: "A simple game to practice javaScript",
  },
  {
    name: "ChromeExtension",
    deployLink: "https://chrome-extension-qtzi.vercel.app/",
    techStack: ["JavaScript", "html", "css"],
    gitHubLink: "https://github.com/suysah/ChromeExtension",
    info: "It is an chrome extension to save all the important tab links at one place on a single click. ",
  },
];

const Project = () => {
  return (
    <>
      <section className="project" id="project">
        <h1 className="project-heading">
          Latest <span style={{ color: "#0ef" }}> Projects </span>{" "}
        </h1>
        <div className="project-section">
          {Projects.map((project) => (
            <ProjectCard
              name={project.name}
              deployLink={project.deployLink}
              techStack={project.techStack}
              gitHubLink={project.gitHubLink}
              info={project.info}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
