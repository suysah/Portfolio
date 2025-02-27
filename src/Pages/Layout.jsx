import React from "react";
import Intro from "./Homepage/Intro";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
// import Education from "./Education";

const Layout = () => {
  return (
    <>
      <Intro />
      <Skills />
      <Project />
      {/* <Education /> */}
      <Contact />
    </>
  );
};

export default Layout;
