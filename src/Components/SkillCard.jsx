import React from "react";

const SkillCard = ({ children, name }) => {
  return (
    <div>
      {children}
      <h2 style={{ textAlign: "center", padding: ".8rem", color: "#0ef" }}>
        {name}
      </h2>
    </div>
  );
};

export default SkillCard;
