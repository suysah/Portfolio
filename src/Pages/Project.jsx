import React from "react";

const Project = () => {
  return (
    <>
      <section className="project" id="project">
        <h1 className="project-heading">Latest <span style={{color:"#0ef"}} >  Projects </span> </h1>
        <div className="project-section">
          <div className="project-card chrome-extension">
            <a href="https://chrome-extension-qtzi.vercel.app/" target="blank">
              <h2>Chrome Extension</h2>
              <ul>
                <li>It is made by using HTML, CSS and Javascript</li>
                <li>
                  It is same as bookmark with an extra feature of manually
                  entering your link.
                </li>
                <li className="click">-- Click for demo -- </li>
              </ul>
            </a>
          </div>
          <div className="project-card amazone-clone">
            <a href="https://react-to-do-list-inky.vercel.app/" target="blank">
              <h2>To-Do-List</h2>
              <ul>
                <li>It is made by using HTML, CSS and React js </li>
                <li>
                  It's an app that helps to track our daily activities.
                </li>
                <li className="click">-- Click for demo -- </li>
              </ul>
            </a>
          </div>
          <div className="project-card to-do-list">
          <a href="https://coursera-clone-website-final.vercel.app/" target="blank">
              <h2>Coursera website Clone</h2>
              <ul>
                <li>It is made by using HTML, CSS, Bootstrap5 and React js</li>
                <li>
                  It is a fully responsive coursera clone .
                </li>
                <li className="click">-- Click for demo -- </li>
              </ul>
            </a>
          </div>


          {/* =========================================================== */}




          <div className="project-card chrome-extension">
            <a href="https://chrome-extension-qtzi.vercel.app/" target="blank">
              <h2>Chrome Extension</h2>
              <ul>
                <li>It is made by using HTML, CSS and Javascript</li>
                <li>
                  It is same as bookmark with an extra feature of manually
                  entering your link.
                </li>
                <li className="click">-- Click for demo -- </li>
              </ul>
            </a>
          </div>
          <div className="project-card amazone-clone">
            <a href="https://react-to-do-list-inky.vercel.app/" target="blank">
              <h2>To-Do-List</h2>
              <ul>
                <li>It is made by using HTML, CSS and React js </li>
                <li>
                  It's an app that helps to track our daily activities.
                </li>
                <li className="click">-- Click for demo -- </li>
              </ul>
            </a>
          </div>
          <div className="project-card to-do-list">
          <a href="https://coursera-clone-website-final.vercel.app/" target="blank">
              <h2>Coursera website Clone</h2>
              <ul>
                <li>It is made by using HTML, CSS, Bootstrap5 and React js</li>
                <li>
                  It is a fully responsive coursera clone .
                </li>
                <li className="click">-- Click for demo -- </li>
              </ul>
            </a>
          </div>


          {/* ================================== */}


          
        </div>
      </section>
    </>
  );
};

export default Project;
