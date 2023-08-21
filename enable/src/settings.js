import React from 'react';
import Sidebar from './Sidebar.js';
import './settings.css';
import Navbar from './Navbar.js';

function Settings() {
  return (
    <div className="Settingsr">
    <div className= "sidebar">
      <Sidebar />
    </div>
    <div className="header navbar">
            <Navbar />
                    
                </div>
    <div className="content-center">
      <h1>Settings</h1>
      </div>
     
    </div>
  
  
  );
}


export default Settings;