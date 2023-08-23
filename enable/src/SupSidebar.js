import React from 'react';
import { Link } from 'react-router-dom';
import './SupSidebar.css';
function SupSidebar() {
  return (
    <div className="supsidebar">
      <ul>
        <li><Link to="/support/SupportDash">Dashboard</Link></li>
        <li><Link to="/support/incomingIncident">List Of Incoming Incidents</Link></li>
        <li><Link to="/support/StaffAssign">Staff Assignment</Link></li>
        <li><Link to="/support/incidentDetail">Incident details</Link></li>
      </ul>
      
    </div>
  );
}

export default SupSidebar;