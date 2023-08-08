import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/SideBar/SideBar';
import AllSection from './pages/AllSection/AllSection';
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
        <Route path="/" element={<AllSection />} />
      </Routes>
      {/*  <Footer/> */}
    </Router>
  </React.StrictMode>
);


