import React from "react";

const Skills = () => {
  return (
    <>
    <section className="skill-section" id="skill">
      <div>
        <h1>
          {" "}
          my <span style={{ color: "#0ef" }}> Skills </span>{" "}
        </h1>
        <div className="skills">
          <div>
            <i class="fab fa-brands icon fa-html5"></i>
            <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >HTML</h2>
          </div>
          <div>
            <i class="fa-brands icon fa-css3-alt"></i>
            <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >CSS</h2>
          </div>
          <div>
            <i class="fa-brands icon fa-square-js"></i>
            <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >JavaScript</h2>
          </div>
          <div>
            <i class="fa-brands icon fa-bootstrap"></i>
            <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >Bootstrap</h2>
          </div>
          <div>
            <i class="fa-brands icon fa-figma"></i>
            <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >Figma</h2>
          </div>
          <div>
            <i class="fa-brands icon fa-git-alt"></i>
            <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >Git</h2>
          </div>
          <div>
            <i class="fa-brands icon fa-react"></i>
            <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >React js</h2>
          </div>
          <div>
          <i class="fa-solid icon fa-c"></i>
          <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >C</h2>
          </div>
          <div>
          <i class="fa-brands icon fa-python"></i>
          <h2 style={{textAlign:"center",padding:".8rem",color:"#0ef"}} >Python</h2>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
