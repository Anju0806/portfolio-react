
import React, { useState } from "react";
import './SideBar.css'; // Import the CSS file

function Sidebar() {

    return (
        <div className="SidebarContainer">
            <a href="#AboutMeId">About Me</a>
            <a href="#PortFolioId">Recent Works</a>
            <a href="#ExperienceId" >Experience</a>
            <a href="#EducationId" >Education</a>
            <a href="#ResumeId" >Resume</a>
            {/* <a href="#ContactId" >Contact</a> */}
        </div>
    );
}

export default Sidebar; 
