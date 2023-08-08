/*  import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './SideBar.css'; // Import the CSS file

function Sidebar() {
   
    return(
       <div className="SidebarContainer">
           <div className="right-items">
               <div className="SidebarItem">
                   <Link to={{ pathname: "/aboutme" }}>About Me</Link>
               </div>
               <div className="SidebarItem">
                   <Link to={{ pathname: "/recentworks" }}>Recent Works</Link>
               </div>
               <div className="SidebarItem">
                   <Link to={{ pathname: "/resume" }}>Education</Link>
               </div>
               <div className="SidebarItem">
                   <Link to={{ pathname: "/resume" }}>Experience</Link>
               </div>
               <div className="SidebarItem">
                   <Link to={{ pathname: "/resume" }}>Resume</Link>
               </div>
               <div className="SidebarItem">
                   <Link to={{ pathname: "/contact" }}>Contact</Link>
               </div>
                 
           </div>
       </div>
   ); 
   
}

export default Sidebar;
 */

import React, { useState } from "react";
import styled from 'styled-components';
import './SideBar.css'; // Import the CSS file

function Sidebar() {
   
    return(
       <div className="SidebarContainer">
           <div className="right-items">
               <div className="SidebarItem">
               <a href="#AboutMeId">About Me</a>
               </div>
               <div className="SidebarItem">
               <a href="#PortFolioId">Recent Works</a>
               </div>
               <div className="SidebarItem">
               <a href="#ExperienceId" >Experience</a>
               </div>
               <div className="SidebarItem">
               <a href="#EducationId" >Education</a>
               </div>
               <div className="SidebarItem">
               <a href="#ResumeId" >Resume</a>
               </div>
               <div className="SidebarItem">
               <a href="#ContactId" >Contact</a>
               </div>
                 
           </div>
       </div>
   ); 
   
}

export default Sidebar; 
