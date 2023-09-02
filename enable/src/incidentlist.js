import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getIncidentList } from './services/userService';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function IncidentList() {
  const location = useLocation();
  const [incidentData, setIncidentData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //const email = "20cse065@gweca.com"; // Replace with the actual user email
    const email = location.state && location.state.email;
    getIncidentList(email)
      .then((data) => {
        setIncidentData(data); // Assuming data is an array of incidents
      })
      .catch((err) => {
        // Handle any errors that occur during the request
        setError(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>Incident List</h2>
      {error ? (
        <p>Error: {error.message}</p>
      ) : incidentData.length > 0 ? (
        <div>
          {incidentData.map((incident) => (
            <div key={incident.id}>
              <p>Incident Title: {incident.incidentTitle}</p>
              <p>Incident Description: {incident.incidentDescription}</p>
              <p>Location: {incident.location}</p>
              <p>Cubicle: {incident.cubicle}</p>
              <p>Category: {incident.category}</p>
              <p>Priority: {incident.priority}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default IncidentList;
