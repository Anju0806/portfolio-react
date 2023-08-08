// Resume.js
import React from 'react';
import "./Experience.css";
import ExperienceData from "./ExperienceData"; // Import the ExperienceData array

function Experience() {
    return (
        
        <div id="ExperienceId" className="Experience">{/* adding Experience with id ExperienceId */}
            <h2>Experience</h2>
            {ExperienceData.map((app, index) => (
                <div key={index} className="ExperienceData">
                    <h3>{app.title} </h3>
                    <h4>{app.timeframe}</h4>
                    <p>{app.data} </p>
                </div>
            ))}
        </div>
    );
}
export default Experience;
