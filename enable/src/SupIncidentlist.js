import React, { useState } from 'react';
import './SupIncidentlist.css';

const ExampleIncidentPage = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [assignedStaff, setAssignedStaff] = useState('');
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: 'Network Outage',
      status: 'Pending',
      dateCreated: '2023-08-20',
      priority: 'High',
      reporter: 'John Doe',
      description: 'Users are unable to access the company network.',
    },
    {
      id: 2,
      title: 'Printer Malfunction',
      status: 'Open',
      dateCreated: '2023-08-21',
      priority: 'Medium',
      reporter: 'Jane Smith',
      description: 'The printer in the second floor office is not printing properly.',
    },
    {
      id: 3,
      title: 'Software Crash',
      status: 'Resolved',
      dateCreated: '2023-08-22',
      priority: 'Low',
      reporter: 'Alex Johnson',
      description: 'The accounting software crashed while generating reports.',
    },
    // Add more incidents here...
  ]);

  const handleIncidentClick = (incident) => {
    setSelectedIncident(incident);
    setAssignedStaff('');
  };

  const handleAssignStaff = (incidentId) => {
    // Here you can update the assigned staff for the incident in your state or make an API call.
    // For this example, let's just update the local state.
    const updatedIncidents = incidents.map((incident) => {
      if (incident.id === incidentId) {
        return { ...incident, assignedStaff: assignedStaff };
      }
      return incident;
    });
    setIncidents(updatedIncidents);
    setAssignedStaff('');
  };

  return (
    <div>
      <h1>Reported Incidents</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Priority</th>
            <th>Assigned Staff</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <React.Fragment key={incident.id}>
              <tr onClick={() => handleIncidentClick(incident)}>
                <td>{incident.title}</td>
                <td>{incident.status}</td>
                <td>{incident.dateCreated}</td>
                <td>{incident.priority}</td>
                <td>{incident.assignedStaff || 'Unassigned'}</td>
              </tr>
              {selectedIncident && selectedIncident.id === incident.id && (
                <tr>
                  <td colSpan="5">
                    <p>Reporter: {incident.reporter}</p>
                    <p>Description: {incident.description}</p>
                    <div>
                      <label htmlFor="assignStaff">Assign Staff:  </label>
                      <select
                        id="assignStaff"
                        value={assignedStaff}
                        onChange={(e) => setAssignedStaff(e.target.value)}
                      >
                        <option value="">Select Staff</option>
                        <option value="staff1">Staff 1</option>
                        <option value="staff2">Staff 2</option>
                        {/* Add more staff options here... */}
                      </select>
                      <button onClick={() => handleAssignStaff(incident.id)}>Assign</button>
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

export default ExampleIncidentPage;
