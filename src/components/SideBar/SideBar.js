//sidebar for larger devices-links to sections in page
import React from "react";
import './SideBar.css'; // Import the CSS file
import profileImage from '../../pages/images/profile-image.jpeg'; // Import your profile image

function Sidebar() {

    return (
        <div className="SidebarContainer">
            <div className="ProfileImageContainer">
                <img src={profileImage} alt="Profile" className="ProfileImage" />
            </div>
            <a href="#AboutMeId">About Me</a>
            <a href="#PortFolioId">Recent Works</a>
            <a href="#ExperienceId" >Experience</a>
            <a href="#EducationId" >Education</a>
            <a href="#ResumeId" >Resume</a>
        </div>
    );
}

export default Sidebar; 
