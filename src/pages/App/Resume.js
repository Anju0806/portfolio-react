// Resume.js
import React from 'react';
import resumepdf from './images/AnjuShaji-Resume.pdf';
import "./Resume.css";

function Resume() {
    return (
        <div id="ResumeId" className="Resume">
            <h2>Resume</h2>
            {/* adding Resume with id ResumeId */}
            <a href={resumepdf} target="_blank" download>
                Download Resume
            </a>
        </div>
    );
}

export default Resume;
