// AllSection.js
import React from 'react';
import './AllSection.css';
import AboutMe from './AboutMe'; // Import the AboutMe component
import PortFolio from './PortFolio'; // Import the AboutMe component
function AllSection() {
  return (
    <div className="AllSection p-0 mt-2">
      <left>
        <AboutMe /> {/* Render the AboutMe component here */}
        <PortFolio /> {/* Render the PotFolio component here */}
      </left>
    </div>
  );
}

export default AllSection;
