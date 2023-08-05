import {
  Link,
} from "react-router-dom";
import "./Footer.css";
import { FaGithub,FaLinkedin } from 'react-icons/fa';
function Footer() {
  return(
    <div className="Footer">
      <div>
        <div className="footer-items">
          <FaGithub/>
          <FaLinkedin/>
          <Link to={{ pathname: "/portfolio" }}>{FaLinkedin}</Link>
        </div>
      </div>
    </div>)
}

export default Footer