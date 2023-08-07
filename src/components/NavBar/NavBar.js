import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const toggleNav = () => {
    document.getElementById("nav-links").classList.toggle("open");
  };

  return (
    <div className="Nav">
      <button className="toggle-button" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div id="nav-links" className="nav-links">
        <Link to={{ pathname: "/aboutme" }} >
            About Me
          </Link>
          <Link to={{ pathname: "/recentworks" }} >
          Recent Works
          </Link>
          <Link to={{ pathname: "/resume" }}>
            Resume
          </Link>
          <Link to={{ pathname: "/contact" }} >
            Contact
          </Link>
      </div>
    </div>
  );
}


export default NavBar;


