import React from "react";
import Header from "./Header";
import { NavHashLink } from "react-router-hash-link";

const Intro = () => {
  return (
    <section id="top">
      <Header />
      <div className="intro-section">
        <div className="info-section">
          <h2>Hello, It's Me</h2>
          <h1>Suyash Nagar</h1>
          <h2>
            And I'am a{" "}
            <span style={{ color: "#0ef" }}>Full Stack Developer</span>{" "}
          </h2>
          <p>
            I'm passionate about building scalable, efficient, and user-friendly
            web applications. With expertise in MongoDB, Express.js, React, and
            Node.js (MERN stack), I develop clean, maintainable code that powers
            both the frontend and backend seamlessly. My focus is on creating
            intuitive user experiences, optimizing performance, and ensuring
            applications are responsive across all devices. I love solving
            complex problems, integrating modern technologies, and bringing
            ideas to life through full-stack development.
          </p>
          <div className="social-media">
            <a href="https://github.com/suysah" target="blank">
              <i className="fa-brands social-icon fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/feed/" target="blank">
              <i className="fa-brands social-icon  fa-linkedin"></i>
            </a>
            {/* <a  >
              <i className="fa-brands social-icon fa-whatsapp"></i>
            </a>
            <a>
              <i className="fa-brands social-icon fa-instagram"></i>
            </a> */}
          </div>

          <div className="cv-btn">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1vPaUC-biQiMunn-ovM2aE78XeIOR1cRX/view?usp=sharing"
            >
              <button className="btn">Download CV</button>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src="./Images/main-hero.png" alt="Author-looks" />
        </div>
      </div>
      <div className="up-arrow-div">
        <NavHashLink to="#top" smooth>
          <button className="up-arrow">
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        </NavHashLink>
      </div>
    </section>
  );
};

export default Intro;
