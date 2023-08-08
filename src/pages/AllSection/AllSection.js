// AllSection.js
import React from 'react';
import './AllSection.css';
import AboutMe from '../AboutMe/AboutMe'; // Import the AboutMe component
import PortFolio from '../RecentWorks/PortFolio'; // Import the PortFolio component
import Education from '../Education/Education'; // Import the Education component
import Experience from '../Experience/Experience'; // Import the Experience component
import Resume from '../Resume/Resume'; // Import the Resume component
function AllSection() {
  return (
    <div className="AllSection p-0 mt-2 ">
      <left>
        <AboutMe /> {/* Render the AboutMe component here */}
        <PortFolio /> {/* Render the PotFolio component here */}
        <Experience /> {/* Render the Experience component here */}
        <Education /> {/* Render the Education component here */}
        <Resume /> {/* Render the Resume component here */}
      </left>
    </div>
  );
}

export default AllSection;
