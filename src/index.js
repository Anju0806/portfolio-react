import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <div> testing</div>,
  },
]); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router  >
      <NavBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<div> testing</div>} />
      </Routes>
      <footer/>
    </Router>
  </React.StrictMode>
);


