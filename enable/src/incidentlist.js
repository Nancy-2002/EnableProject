import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getIncidentList } from './services/userService';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './incidentlist.css';

function IncidentList() {
  const location = useLocation();
  const [incidentData, setIncidentData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncidentData = async () => {
      try {
        const email = "Tejal2222@gmail.com";
        if (email) {
          const data = await getIncidentList(email);
          setIncidentData(data);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchIncidentData();
  }, [location.state]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>Incident List</h2>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Incident Title</th>
              <th>Incident Description</th>
              <th>Location</th>
              <th>Cubicle</th>
              <th>Category</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {incidentData.map((incident) => (
              <tr key={incident.id}>
                <td>{incident.incidentTitle}</td>
                <td>{incident.incidentDescription}</td>
                <td>{incident.location}</td>
                <td>{incident.cubicle}</td>
                <td>{incident.category}</td>
                <td>{incident.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default IncidentList