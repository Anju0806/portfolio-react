import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div >

            <div >
                <Link to={{ pathname: "/" }} className="header-name-link">Anju Shaji</Link>
            </div>
            <div className="right-items">
                <Link to={{ pathname: "/aboutme" }} className="header-about-link">About Me</Link>
                <Link to={{ pathname: "/portfolio" }} className="header-portfolio-link">Portfolio</Link>
                <Link to={{ pathname: "/contact" }} className="header-contact-link">Contact</Link>
                <Link to={{ pathname: "/resume" }} className="header-resume-link">Resume</Link>
            </div>

        </div>
    )
}

export default Sidebar