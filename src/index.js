import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/SideBar/SideBar';
import AboutMe from './pages/AboutMe/AboutMe'; // Import the AboutMe component
import PortFolio from './pages/RecentWorks/PortFolio'; // Import the PortFolio component
import Education from './pages/Education/Education'; // Import the Education component
import Experience from './pages/Experience/Experience'; // Import the Experience component
import Resume from './pages/Resume/Resume'; // Import the Resume component

/* import Footer from './components/Footer/Footer'; */

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Sidebar />
      <Routes>
        {/* <Route path="/portfolio-react" element={<div className="AllSection p-0 mt-2 ">
          <left>
            <AboutMe /> 
            <PortFolio /> 
            <Experience /> 
            <Education /> 
            <Resume /> 
          </left>
        </div>} /> */}
        <Route path='/AboutMe' element={<AboutMe />} /> 
        <Route path='/PortFolio' element={<PortFolio />} /> 
        <Route path='/Experience' element={<Experience />} /> 
        <Route path='/Education' element={<Education />} /> 
        <Route path='/Resume' element={<Resume />} /> 

      </Routes>
       {/*  <Footer/> */}
    </Router>
  </React.StrictMode>
);


