import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logo.jpeg'} alt="Logo" />
      </div>
      
    </nav>
  );
}

export default Navbar;
