
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="Nav">
      <button className="toggle-button" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div id="nav-links" className={`nav-links ${isNavOpen ? "open" : ""}`}>
        <a href="#AboutMeId" className="nav-link" onClick={closeNav}>
          About Me
        </a>
        <a href="#PortFolioId" className="nav-link" onClick={closeNav}>
          Recent Works
        </a>
        <a href="#ExperienceId"  className="nav-link" onClick={closeNav}>
          Experience
        </a>
        <a  href ="#EducationId" className="nav-link" onClick={closeNav}> 
          Education 
        </a>
        <a href ="#ResumeId" className="nav-link" onClick={closeNav}>
          Resume
        </a>
        <a href ="#ContactId" className="nav-link" onClick={closeNav}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
