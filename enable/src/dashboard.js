import React from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';
import Navbar from './Navbar.js';
import './App.css';

function Dashboard() {
  return (
    <div className="app-container">
    <div className="header navbar">
       <Navbar />
                    </div>
                    
                    <Sidebar />
    <div className="content-center">
      <h1>Welcome to Dashboard!</h1>
      </div>
      
    <div className="page-content">
    <div className="banner" >
    
        </div>
       
      </div>  
    </div>
  
  
  );
}

export default Dashboard;