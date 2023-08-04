import {
  Link,
} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (<div className="Nav">
    <div>
      <div className="left-item">
        <Link to={{ pathname: "/" }} className="header-name-link">Anju Shaji</Link>
      </div>
      <div className="right-items">
        <Link to={{ pathname: "/aboutme" }} className="header-about-link">About Me</Link>
        <Link to={{ pathname: "/portfolio" }} className="header-portfolio-link">Portfolio</Link>
        <Link to={{ pathname: "/contact" }} className="header-contact-link">Contact</Link>
        <Link to={{ pathname: "/resume" }} className="header-resume-link">Resume</Link>
      </div>
    </div>
  </div>)
}

export default NavBar