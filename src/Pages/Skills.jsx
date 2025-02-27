import React from "react";
import SkillCard from "../Components/SkillCard";

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
            <SkillCard name="HTML5">
              <i class="fab fa-brands icon fa-html5"></i>
            </SkillCard>
            <SkillCard name="CSS3">
              <i class="fa-brands icon fa-css3-alt"></i>
            </SkillCard>
            <SkillCard name="JavaScript">
              <i class="fa-brands icon fa-square-js"></i>{" "}
            </SkillCard>
            <SkillCard name="React">
              <i class="fa-brands icon fa-react"></i>
            </SkillCard>
            <SkillCard name="Node">
              <i class="fa-brands icon fa-node-js"></i>{" "}
            </SkillCard>
            <SkillCard name="MongoDB">
              <i class="fa-solid icon fa-database"></i>{" "}
            </SkillCard>
            <SkillCard name="Tailwind CSS">
              <img src="../../Images/tailwind.svg" alt="tailwind logo" />
            </SkillCard>
            <SkillCard name="MySQL">
              <i class="fa-solid icon fa-database"></i>{" "}
            </SkillCard>
            <SkillCard name="Redux">
              <img src="../../Images/redux.svg" alt="redux logo" />
            </SkillCard>
            <SkillCard name="Figma">
              <i class="fa-brands icon fa-figma"></i>
            </SkillCard>
            <SkillCard name="Git">
              <i class="fa-brands icon fa-git-alt"></i>
            </SkillCard>
            <SkillCard name="C++">
              <img src="../../Images/cpp.svg" alt="redux logo" />
            </SkillCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
