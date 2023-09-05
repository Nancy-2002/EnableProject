import React from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';
import Navbar from './Navbar.js';
import './login.css';
import './App.css';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const email = localStorage.getItem('email');

  console.log(email);//parameters from login form
  return (
    <div className="app-container">
       <Navbar />
                    
                    <Sidebar />
    <div className="content-center">
      <h1>Welcome to Dashboard!</h1>
      <p>Welcome, {email}!</p>
      </div>
      
    <div className="page-content">
    <div className="banner" >
    
        </div>
       
      </div>  
    </div>
  
  
  );
}

export default Dashboard;