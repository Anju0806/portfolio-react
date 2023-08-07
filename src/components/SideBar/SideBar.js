import React, { useState } from "react";
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
