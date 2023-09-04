import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './SupIncident.css';
import { getIncidents,updateIncidents } from './services/userService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialIncidentsData = [
  {
    id: 1,
    title: 'Network Outage',
    status: 'Open',
    dateCreated: '2023-08-25',
    priority: 'High',
    assignedStaff: '',
    reporter: 'Alice',
    reporterDate: '2023-08-24',
    description: 'Users are unable to access the network.',
  },
  {
    id: 2,
    title: 'Server Crash',
    status: 'Open',
    dateCreated: '2023-08-24',
    priority: 'Medium',
    assignedStaff: '',
    reporter: 'Bob',
    reporterDate: '2023-08-23',
    description: 'One of the servers crashed unexpectedly.',
  },
  {
    id: 3,
    title: 'Software Bug',
    status: 'Closed',
    dateCreated: '2023-08-23',
    priority: 'Low',
    assignedStaff: 'Michael Johnson',
    reporter: 'Eve',
    reporterDate: '2023-08-22',
    description: 'Bug in the software causing unexpected behavior.',
  },
  {
    id: 4,
    title: 'Data Loss',
    status: 'Open',
    dateCreated: '2023-08-22',
    priority: 'High',
    assignedStaff: '',
    reporter: 'Grace',
    reporterDate: '2023-08-21',
    description: 'Critical data loss in the main database.',
  },
  {
    id: 5,
    title: 'Website Error',
    status: 'Open',
    dateCreated: '2023-08-21',
    priority: 'Medium',
    assignedStaff: '',
    reporter: 'Henry',
    reporterDate: '2023-08-20',
    description: 'Website showing error 500 for some pages.',
  },

  {
    id: 6,
    title: 'Server Maintenance',
    status: 'In Progress',
    dateCreated: '2023-08-27',
    priority: 'Medium',
    assignedStaff: 'John Doe',
    reporter: 'Olivia',
    reporterDate: '2023-08-26',
    description: 'Scheduled server maintenance is currently ongoing.',
  },
  {
    id: 7,
    title: 'Database Upgrade',
    status: 'In Progress',
    dateCreated: '2023-08-28',
    priority: 'High',
    assignedStaff: 'Jane Smith',
    reporter: 'David',
    reporterDate: '2023-08-27',
    description: 'Upgrading the main database to improve performance.',
  },
  {
    id: 8,
    title: 'Security Patch',
    status: 'In Progress',
    dateCreated: '2023-08-29',
    priority: 'High',
    assignedStaff: 'Michael Johnson',
    reporter: 'Sophia',
    reporterDate: '2023-08-28',
    description: 'Applying security patches to address vulnerabilities.',
  },
  {
    id: 9,
    title: 'Application Testing',
    status: 'In Progress',
    dateCreated: '2023-08-30',
    priority: 'Low',
    assignedStaff: 'Gregory',
    reporter: 'Emma',
    reporterDate: '2023-08-29',
    description: 'Conducting thorough testing of a new application feature.',
  },
  {
    id: 10,
    title: 'Performance Optimization',
    status: 'In Progress',
    dateCreated: '2023-08-31',
    priority: 'Medium',
    assignedStaff: 'Jessica',
    reporter: 'Liam',
    reporterDate: '2023-08-30',
    description: 'Optimizing code and resources for better performance.',
  },
  {
    id: 11,
    title: 'Login Issue',
    status: 'Closed',
    dateCreated: '2023-08-25',
    priority: 'Low',
    assignedStaff: 'Eleanor',
    reporter: 'Noah',
    reporterDate: '2023-08-24',
    description: 'Users were unable to log in to the application.',
    resolution: 'Identified and fixed a server configuration issue.',
    resolutionDate: '2023-08-26',
  },
  {
    id: 12,
    title: 'Data Sync Problem',
    status: 'Closed',
    dateCreated: '2023-08-24',
    priority: 'Medium',
    assignedStaff: 'Benjamin',
    reporter: 'Ava',
    reporterDate: '2023-08-23',
    description: 'Data synchronization between servers was failing.',
    resolution: 'Performed a database synchronization and resolved network connectivity issues.',
    resolutionDate: '2023-08-27',
  },
  {
    id: 13,
    title: 'Application Crash',
    status: 'Closed',
    dateCreated: '2023-08-23',
    priority: 'High',
    assignedStaff: 'Daniel',
    reporter: 'Mia',
    reporterDate: '2023-08-22',
    description: 'The application was crashing on launch.',
    resolution: 'Identified a memory leak and released a patch to fix it.',
    resolutionDate: '2023-08-25',
  },
  {
    id: 14,
    title: 'Broken Link',
    status: 'Closed',
    dateCreated: '2023-08-22',
    priority: 'Medium',
    assignedStaff: 'Chloe',
    reporter: 'James',
    reporterDate: '2023-08-21',
    description: 'A link on the website was leading to an error page.',
    resolution: 'Updated the link URL to the correct destination.',
    resolutionDate: '2023-08-23',
  },
  {
    id: 15,
    title: 'Performance Degradation',
    status: 'Closed',
    dateCreated: '2023-08-21',
    priority: 'High',
    assignedStaff: 'William',
    reporter: 'Harper',
    reporterDate: '2023-08-20',
    description: 'The application performance was significantly slower than usual.',
    resolution: 'Identified and optimized database queries to improve performance.',
    resolutionDate: '2023-08-24',
  },
  // Add more incidents here...
];

const staffOptions = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Gregory' , 'Benjamin', 'Chloe', 'Eleanor','Jessica',
'Daniel', 'William',/* ... */];

const IncidentTable = () => {
  const [expandedIncidentId, setExpandedIncidentId] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState('');
  const [incidents, setIncidents] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    getIncidents()
      .then((data) => {
        // Update the state with the fetched data
        setIncidents(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedStatus]);

  const toggleExpand = (incidentId) => {
    setExpandedIncidentId(expandedIncidentId === incidentId ? null : incidentId);
  };

  const handleStaffSelect = (event) => {
    setSelectedStaff(event.target.value);
  };

  const assignStaff = (incidentId) => {
    if (selectedStaff) {
      // Create an object with the updated data
      const updatedData = {
        assignedTo: selectedStaff,
        status:"In Progress",
      };

      // Call the updateIncidents function with the incident ID and updated data
      updateIncidents(incidentId, updatedData)
        .then((response) => {
          // Check if the update was successful
          if (response === 'Incident updated successfully') {
            // Update the state to reflect the new assigned staff
            const updatedIncidents = incidents.map((incident) => {
              if (incident.id === incidentId && incident.status === 'Open') {
                return { ...incident, assignedTo: selectedStaff, status: 'In Progress' };
              }
              return incident;
            });
            setIncidents(updatedIncidents);
            setSelectedStaff('');
            toast.success('Staff Assigned Successfully');
          } else {
            // Handle error if needed
            console.error('Error updating incident:', response);
          }
        })
        .catch((error) => {
          console.error('Error updating incident:', error);
          toast.error('Error updating incident. Please try again.');
        });
    }
  };
  
  const filteredIncidents = incidents.filter((incident) => selectedStatus === 'All' || incident.status === selectedStatus);


  const sortedIncidents = filteredIncidents.sort((a, b) => {
    const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
    
  const priorityComparison = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityComparison !== 0) {
      return priorityComparison;
    }

    const statusComparison = (b.status || '').localeCompare(a.status || '');
  if (statusComparison !== 0) {
    return statusComparison;
  }

    // If priorities are the same, compare by date created (ascending order)
    return new Date(a.dateOfIncident) - new Date(b.dateOfIncident);
  });

  const IncidentFilter = ({ selectedStatus, setSelectedStatus }) => {
    return (
      <div className="filter-container">
        <label><strong>Filter by:  </strong></label>
        <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
    );
  };

  return (
    
    <div>
    <IncidentFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
    <table>
      <thead>
        <tr>
          <th>Incident title</th>
          <th>Status</th>
          <th>Date reported</th>
          <th>Priority</th>
          <th>Assigned staff</th>
        </tr>
</thead>
      <tbody>
        {sortedIncidents.map((incident) => (
          <React.Fragment key={incident.id}>
            <tr onClick={() => toggleExpand(incident.id)}>
              <td>{incident.incidentTitle}</td>
              <td>{incident.status}</td>
              <td>{incident.dateOfIncident}</td>
              <td>
                <span className={`priority-indicator ${incident.priority.toLowerCase()}`}>
                  {incident.priority}
                </span>
              </td>
              <td>{incident.assignedTo || 'Not Assigned'}</td>
            </tr>
            {expandedIncidentId === incident.id && (
              <tr className="expanded-row">
                <td colSpan="5">
                  <div className="incident-details">
                    <p><b>Reporter: </b>{incident.assignedTo}</p>
                    <p><b>Date Created: </b>{incident.dateOfIncident}</p>
                    <p><b>Description: </b>{incident.incidentDescription}</p>
                    {incident.status === 'Open' && (
                      <div className="assign-section">
                        <label className="assign-label">Assign To:</label>
                        <select value={selectedStaff} onChange={handleStaffSelect}>
                          <option value="" disabled>Select staff</option>
                          {staffOptions.map((staff, index) => (
                            <option key={index} value={staff}>
                              {staff}
                            </option>
                          ))}
                        </select>
                        <button onClick={() => assignStaff(incident.id)}>Assign</button>
                      </div>
                    )}
                    {incident.status === 'Closed' && (
                        <div className="resolution-section">
                          <p><b>Resolution: </b>{incident.resolutionDescription}</p>
                          <p><b>Resolution Date: </b>{incident.resolutionDate}</p>
                        </div>
                      )}
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

const IncidentDetails = () => {
  return (
    <div>
    <Navbar />
    <div className="container">
      <h1 className="page-heading">Reported Incidents</h1>
      <IncidentTable />
    </div>
    </div>
  );
};

export default IncidentDetails;