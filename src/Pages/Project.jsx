import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = [
  {
    name: "Natours",
    deployLink: "https://natours-nine-nu.vercel.app/",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Rest API",
      "Leaflet",
      "NodeMailer",
      "Pug",
      "CSS",
      "Server Side Rendered",
    ],
    gitHubLink: "https://github.com/suysah/natours",
    info: "Natours is a tour booking serverside rendered application, On which user can see ,book and review the tours. It also have features like password reset, user info updation ans user image upload.",
  },
  {
    name: "The-Wild_Oasis",
    deployLink: "https://holet-management.vercel.app/",
    techStack: ["react.js", "React Query", "Supabase", "CSS", "API"],
    gitHubLink: "https://github.com/suysah/HoletManagement",
    info: "The-Wild_Oasis is a hotel management platform for room bookings, check-ins, and check-outs, ensuring a seamless userexperience. i had used Supabase for real-time data synchronization and secure data management.",
  },
  {
    name: "React-Pizza",
    deployLink: "https://react-pizza-kappa-wheat.vercel.app/",
    techStack: ["react.js", "Redux", "Tailwind CSS", "API"],
    gitHubLink: "https://github.com/suysah/ReactPizza",
    info: "React-Pizza is an online pizza ordering platform with a user-friendly interface, Incorporated with real-time cart updates,quantity customization,and dynamic location fetching for personalized service and also a priority-based order management to streamline user checkout.",
  },
  {
    name: "Quizzeria",
    deployLink: "https://quizzeria.vercel.app/",
    techStack: ["react.js", "css", "API"],
    gitHubLink: "https://github.com/suysah/Quizzeria",
    info: "Quizzeria is an online quiz platform with feature's like mulitiple subjects to select from, time Bounded quiz environment, reviewing submitted answers and more ",
  },
  {
    name: "Portfolio",
    deployLink: "https://portfolio-fpf8-git-main-suysahs-projects.vercel.app/",
    techStack: ["react.js", "css", "Email Js"],
    gitHubLink: "https://github.com/suysah/Portfolio",
    info: "A portfolio website to showcase my skills and Projects. ",
  },

  {
    name: "To-Do-List",
    deployLink: "https://react-to-do-list-inky.vercel.app/",
    techStack: ["react.js", "css"],
    gitHubLink: "https://github.com/suysah/ReactToDoList",
    info: "It's an app that helps to track our daily activities.",
  },
  {
    name: "Coursera Clone",
    deployLink: "https://coursera-clone-website-final.vercel.app/",
    techStack: ["react.js", "css"],
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
