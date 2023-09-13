import React from 'react';
import './dashboard.css';
import Navbar from './Navibar.js';
import './login.css';

function Dashboard() {
  const email = localStorage.getItem('email');

  console.log(email);//parameters from login form
  return (
    <div>
       <Navbar />
                    
                     
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