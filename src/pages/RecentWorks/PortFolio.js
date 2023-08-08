// PortFolio.js
import React from "react";
import "./PortFolio.css";
import { FaGithub } from "react-icons/fa"; // Import the FaGithub icon
import ProjectData from "./ProjectData"; // Import the ProjectData array

function PortFolio() {
    return (
        <div id="PortFolioId" className="PortFolio">
            <h2>Recent Works</h2>
            {/* Map through the ProjectData array */}
            {ProjectData.map((app, index) => (
                <div key={index} className="application">
                    <a className="github-link" href={app.githubLink} target="_blank" rel="noopener noreferrer">
                        <h3>{app.title}  <FaGithub /></h3>
                    </a>
                    <a href={app.deployedLink} target="_blank" rel="noopener noreferrer">
                        <img src={app.image} alt={app.title} />
                    </a>
                </div>
            ))}
        </div>
    );
}

export default PortFolio;