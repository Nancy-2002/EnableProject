import React from 'react';
//import SupSidebar from './SupSidebar.js';
import './SupportDash.css';
import Navbar from './Navbar.js';

function SupportDash() {
  return (
    <div className="dashboard-container">
    {/*<div className= "supsidebar">
      <SupSidebar />
    </div>*/}
    <div className="header navbar">
       <Navbar/>
    </div>
                    
    <div className="content-center">
      <h1>Welcome to Support Team Dashboard!</h1>
      </div>
    <div className="page-content">
    <div className="banner" >
    
        </div>
       
      </div>  
    </div>
  
  
  );
}

export default SupportDash;