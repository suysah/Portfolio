import React from "react";
// import {NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";


const Header = () => {
  return (
    <header>
      <nav>
        <div className="header-section">
          <ul>
            <li>
              <NavHashLink to="/#top"  smooth >Home</NavHashLink>
            </li>
            <li>
              <NavHashLink to="#skill"  smooth > Skills </NavHashLink>
            </li>
            <li>
              <NavHashLink to="#project"  smooth > Projects </NavHashLink>
            </li>
            <li>
              <NavHashLink to="#contact"  smooth > Contact </NavHashLink>
            </li>
           
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
