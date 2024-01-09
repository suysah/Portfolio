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
            And I'am a <span style={{ color: "#0ef" }}>Frontend Developer</span>{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam
            nihil soluta atque ipsum, quas magni commodi laboriosam quasi,
            perferendis sint, dolorum tempore adipisci porro ullam asperiores?
            Non, eaque ad?
          </p>
          <div className="social-media">
            <a href="https://github.com/dashboard" target="blank">
              <i className="fa-brands social-icon fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/feed/" target="blank">
              <i className="fa-brands social-icon  fa-linkedin"></i>
            </a>
            <a>
              <i className="fa-brands social-icon fa-whatsapp"></i>
            </a>
            <a>
              <i className="fa-brands social-icon fa-instagram"></i>
            </a>
          </div>

          <div className="cv-btn">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1fP8VYEsMd_ZEsL6WeCV8fQTJ5HG-rfHC/view?usp=drive_link"
            >
              <button className="btn">Download CV</button>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src="./Images/main-hero.png" alt="Author-looks" />
        </div>
      </div>
      <div>
        <NavHashLink to="#top" smooth >
          <button className="up-arrow" >
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        </NavHashLink>
      </div>
    </section>
  );
};

export default Intro;
