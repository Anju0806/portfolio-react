// AboutMe.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./AboutMe.css";
function AboutMe() {
  return (
    
    <div id="AboutMeId" className="AboutMe">{/* adding AboutMe with id AboutMeId */}
      <h1 className="mb-0">
        Anju {' '}
        <span className="text-color">
          Shaji
        </span>
      </h1>
      <h3 className="AddressSection mb-5">398A FLINDERS STREET NOLLAMARA, WA 6061 · (+61) 451-022-795 · <span className="text-color"><a href="mailto:anjualfino@example.com">anjualfino@gmail.com</a></span></h3>
      <p className="AboutMeSection">I am a software developer who offers versatility and strong work ethics with expertise in all aspects of the software development life cycle, including requirement analysis, design, development, testing, deployment, and production support.</p>
      <center>
        {/* adding icons from fontawesome -github and linkedIn */}
      <ul className="list-inline list-social-icons mb-0">
        <li className="list-inline-item">
          <a className="icon-circle" href="https://github.com/Anju0806" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </li>
        <li className="list-inline-item">
          <a className="icon-circle" href="https://www.linkedin.com/in/anju0806/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </li>
      </ul>
      </center>
    </div>
  );
}

export default AboutMe;
