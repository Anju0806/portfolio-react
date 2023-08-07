// Resume.js
import React from 'react';
import "./Education.css";
import EducationData from "./EducationData"; // Import the ProjectData array

function Resume() {
    return (
            <div id="EducationId" className="Education">{/* adding Education with id EducationId */}
                <h2>Education</h2>
                {EducationData.map((app, index) => (
                <div key={index} className="EducationData">
                    <h3>{app.title} </h3>
                    <h4>{app.timeframe} </h4>
                    <p>{app.studiedAt} </p>
                </div>
            ))}
            </div>
    );
}

export default Resume;
