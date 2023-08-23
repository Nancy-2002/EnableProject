import React, { useState } from 'react';
import './SupAssgn.css';

const IncidentAssignmentPage = () => {
  const sampleIncident = {
    title: 'Sample Incident',
    description: 'This is a sample incident description.',
    priority: 'High',
    dateCreated: '2023-08-23',
    reporter: 'John Doe', // Adding the employee name who reported the incident
  };

  const staffList = ['Staff Member 1', 'Staff Member 2', 'Staff Member 3'];

  const [selectedStaff, setSelectedStaff] = useState('');

  const handleAssign = () => {
    // Perform the assignment logic here, using the selectedStaff value
    // For this example, we'll just log the assigned staff member
    console.log(`Assigned staff: ${selectedStaff}`);
  };

  return (
    <div className="incident-assignment">
      <h2>Assign Incident</h2>
    <div className="incident-details">
        <p><strong>Title:</strong> {sampleIncident.title}</p>
        <p><strong>Description:</strong> {sampleIncident.description}</p>
        <p><strong>Priority:</strong> {sampleIncident.priority}</p>
        <p><strong>Date Created:</strong> {sampleIncident.dateCreated}</p>
        <p><strong>Reported by:</strong> {sampleIncident.reporter}</p> {/* Displaying the reporter's name */}
      </div>
      <div className="assign-form">
        <label htmlFor="staff">Assign To:</label>
        <select
          id="staff"
          value={selectedStaff}
          onChange={(e) => setSelectedStaff(e.target.value)}
        >
          <option value="">Select Staff</option>
          {staffList.map((staff, index) => (
            <option key={index} value={staff}>
              {staff}
            </option>
          ))}
        </select>
        <button onClick={handleAssign}>Assign</button>
      </div>
    </div>
   
  );
};

export default IncidentAssignmentPage;

