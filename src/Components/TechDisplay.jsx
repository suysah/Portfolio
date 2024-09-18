import React from "react";

const TechDisplay = ({ children }) => {
  return (
    <div>
      <button className="techbtn"> {children} </button>
    </div>
  );
};

export default TechDisplay;
