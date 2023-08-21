import React from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';
import Navbar from './Navbar.js';

function Dashboard() {
  return (
    <div className="dashboard-container">
    <div className= "sidebar">
      <Sidebar />
    </div>
    <div className="header navbar">
       <Navbar />
                    </div>
                    
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