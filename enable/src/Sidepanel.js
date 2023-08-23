import React from 'react';
import { Link } from 'react-router-dom';
import './Sidepanel.css';

function Sidepanel(props) {
  return (
    <div id="mySidepanel" className={`sidepanel ${props.isOpen ? 'open' : ''}`}>
      <a href="javascript:void(0)" className="closebtn" onClick={props.onClose}>
        &times;
      </a>
      <ul>
        <li><a><Link to="/employee/dashboard">Dashboard</Link></a></li>
        <li><a><Link to="/employee/incident_form">Report an Incident</Link></a></li>
        <li><a><Link to="/employee/incident_list">Incident List</Link></a></li>
      </ul>
      
    </div>
  );
}

export default Sidepanel;
