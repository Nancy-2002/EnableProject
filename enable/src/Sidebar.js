import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/employee/dashboard">Dashboard</Link></li>
        <li><Link to="/employee/incident_form">Report an Incident</Link></li>
        <li><Link to="/employee/incident_list">Incident List</Link></li>
      </ul>
      
    </div>
  );
}

export default Sidebar;