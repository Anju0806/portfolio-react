import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("Toggle button clicked!"); // Add this line

    setIsNavOpen(!isNavOpen);
    console.log("isNavOpen:", isNavOpen); 
  };

  return (
    <div className="Nav">
      
        <button className="toggle-button" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <Link to={{ pathname: "/aboutme" }} >
            About Me
          </Link>
          <Link to={{ pathname: "/portfolio" }} >
            Portfolio
          </Link>
          <Link to={{ pathname: "/contact" }} >
            Contact
          </Link>
          <Link to={{ pathname: "/resume" }}>
            Resume
          </Link>
        </div>
      
    </div>
  );
}

export default NavBar;
