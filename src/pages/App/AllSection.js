// AllSection.js
import React from 'react';
import './AllSection.css';
import AboutMe from './AboutMe'; // Import the AboutMe component
import PortFolio from './PortFolio'; // Import the PortFolio component
import Education from './Education'; // Import the Education component
import Experience from './Experience'; // Import the Experience component
import Resume from './Resume'; // Import the Resume component
function AllSection() {
  return (
    <div className="AllSection p-0 mt-2">
      <left>
        <AboutMe /> {/* Render the AboutMe component here */}
        <PortFolio /> {/* Render the PotFolio component here */}
        <Experience /> {/* Render the Experience component here */}
       {/*  <Education /> */} {/* Render the Education component here */}
        <Resume /> {/* Render the Resume component here */}
      </left>
    </div>
  );
}

export default AllSection;
