import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import './incidentlist.css';
import Navbar from './Navbar.js';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      name: 'Incident 1',
      description: 'Description of Incident 1',
      date: '2023-08-16',
      priority: 'High',
      progress: 'In Progress',
      isOpen: false, // Add isOpen property to track if description is open
    },
    {
      id: 2,
      name: 'Incident 2',
      priority: 'Medium',
      progress: 'In Progress',
      date: '2023-08-16',
      description: 'Description of Incident 2',
    },
    // Add more incidents as needed
  ]);

  const handleIncidentClick = (id) => {
    const updatedIncidents = incidents.map((incident) =>
      incident.id === id
        ? { ...incident, isOpen: !incident.isOpen }
        : { ...incident, isOpen: false }
    );
    setIncidents(updatedIncidents);
  };

  return (
   
      
    <div className= "incident-list">
        <Navbar />
      <div className= "sidebar">
      <Sidebar/>
      </div>
      <h1>Incident List</h1>
      <table className="incident-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Incident Name</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident, index) => (
            <React.Fragment key={incident.id}>
              <tr>
                <td>{index + 1}</td>
                <td onClick={() => handleIncidentClick(incident.id)} className="clickable-incident">
                  {incident.name}
                </td>
                <td>{incident.date}</td>
                <td>{incident.priority}</td>
                <td>{incident.progress}</td>
              </tr>
              {incident.isOpen && (
                <tr>
                  <td colSpan="5">
                    <div className="incident-description">
                      <h2>{incident.name}</h2>
                      <p>{incident.description}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default IncidentList;