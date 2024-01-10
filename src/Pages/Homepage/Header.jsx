import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={menuOpen ? "active" : null }>
        <div className="header-section">
          <ul>
            <li  onClick={() => setMenuOpen(false)}>
              <NavHashLink to="/#top" smooth >
                Home
              </NavHashLink>
            </li>
            <li  onClick={() => setMenuOpen(false)}>
              <NavHashLink to="#skill" smooth >
                {" "}
                Skills{" "}
              </NavHashLink>
            </li>
            <li  onClick={() => setMenuOpen(false)}>
              <NavHashLink to="#project" smooth >
                {" "}
                Projects{" "}
              </NavHashLink>
            </li>
            <li  onClick={() => setMenuOpen(false)}>
              <NavHashLink to="#contact" smooth >
                {" "}
                Contact{" "}
              </NavHashLink>
            </li>

          </ul>
        </div>
        <div className={menuOpen ? "active" : null } >
          <div className="mobile-navbar-btn">
            <i
              className="fa-solid fa-bars menu-open icon "
              name="menu-open"
              onClick={() => setMenuOpen(true)}
            ></i>

            <i
              className="fa-solid fa-xmark menu-close icon"
              name="menu-close"
              onClick={() => setMenuOpen(false)}
            ></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
