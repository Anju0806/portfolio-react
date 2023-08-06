import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import NavBar from './components/NavBar/NavBar';   
import Sidebar from './components/SideBar/SideBar'; 
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
        /* <Route path="/" element={<App />} />*/
        <Route path="/test" element={<div> testing</div>} /> 
      </Routes>
     {/*  <Footer/> */}
    </Router>
  </React.StrictMode>
);


