import React, { useState, useEffect } from 'react';
import { getAssignedIncident, getname } from './services/userService';
import Axios from 'axios';
import Navbar from './Navbar.tsx';
import './EmpIncident.css';
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
    id: 13,
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
    resolution: 'Performed a database synchronization and resolved network connectivity issues.',
    resolutionDate: '2023-08-27',
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
    status: 'Closed',
    dateCreated: '2023-08-27',
    priority: 'Medium',
    assignedStaff: 'John Doe',
    reporter: 'Olivia',
    reporterDate: '2023-08-26',
    description: 'Scheduled server maintenance is currently ongoing.',
    resolution: 'Performed a database synchronization and resolved network connectivity issues.',
    resolutionDate: '2023-08-27',
  },
  {
    id: 7,
    title: 'Database Upgrade',
    status: 'Open',
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
    status: 'Closed',
    dateCreated: '2023-08-29',
    priority: 'High',
    assignedStaff: 'Michael Johnson',
    reporter: 'Sophia',
    reporterDate: '2023-08-28',
    description: 'Applying security patches to address vulnerabilities.',
    resolution: 'Performed a database synchronization and resolved network connectivity issues.',
    resolutionDate: '2023-08-27',
  },
  {
    id: 9,
    title: 'Application Testing',
    status: 'Open',
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
    status: 'Closed',
    dateCreated: '2023-08-31',
    priority: 'Medium',
    assignedStaff: 'Jessica',
    reporter: 'Liam',
    reporterDate: '2023-08-30',
    description: 'Optimizing code and resources for better performance.',
    resolution: 'Performed a database synchronization and resolved network connectivity issues.',
    resolutionDate: '2023-08-27',
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

const IncidentTable = () => {
  const [expandedIncidentId, setExpandedIncidentId] = useState(null);
  const [incidents, setIncidents] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [resolutionDescription, setResolutionDescription] = useState('');
  const [resolutionDate, setResolutionDate] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const email = localStorage.getItem('email')
    console.log(email);
    async function fetchData() {
      try {
        const name = await getname(email);
        console.log(name);
        setUserName(name);

        const data = await getAssignedIncident(name);
        setIncidents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [selectedStatus]);


  const toggleExpand = (incidentId) => {
    setExpandedIncidentId(expandedIncidentId === incidentId ? null : incidentId);
  };

  const handleResolutionChange = (event) => {
    setResolutionDescription(event.target.value);
  };

  const handleResolutionDateChange = (event) => {
    setResolutionDate(event.target.value);
  };

  const updateIncident = (incidentId, updatedIncidentData) => {
    Axios.patch(`http://localhost:8008/incidents/support/${incidentId}`, updatedIncidentData)
      .then((response) => {
        // Handle the successful response (e.g., show a success message)
        console.log('Incident updated successfully:', response.data);
        toast.success('Incident updated successfully.');
      })
      .catch((error) => {
        // Handle errors (e.g., display an error message)
        console.error('Error updating incident:', error);
        toast.error('Error updating incident. Please try again.');
      });
  };

  const completeIncident = (incidentId) => {
    if (resolutionDescription.trim() === '' || resolutionDate.trim() === '') {
      toast.error('Please enter both resolution and resolution date before completing the incident.');
      return;
    }
    const updatedIncidentData = {
      status: 'Closed',
      resolutionDescription: resolutionDescription,
      resolutionDate: resolutionDate,
      // Add other fields as needed for the update
    };
  
    // Call the updateIncident function to send the PATCH request
    updateIncident(incidentId, updatedIncidentData);

    const updatedIncidents = incidents.map((incident) => {
      if (incident.id === incidentId && incident.status === 'In Progress') {
        return {
          ...incident,
          status: 'Closed',
          resolutionDescription: resolutionDescription,
          resolutionDate: resolutionDate,
        };
      }
      return incident;
    });
    setIncidents(updatedIncidents);
    setResolutionDescription('');
    setResolutionDate('');
    toast.success('Incident completed successfully.');
  };

  const filteredIncidents = incidents.filter(
    (incident) => selectedStatus === 'All' || incident.status === selectedStatus
  );

  const sortedIncidents = filteredIncidents.sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };

    const priorityComparison = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityComparison !== 0) {
      return priorityComparison;
    }

    const statusComparison = b.status.localeCompare(a.status);
    if (statusComparison !== 0) {
      return statusComparison;
    }
    

    return new Date(a.dateOfIncident) - new Date(b.dateOfIncident);
  });

  const IncidentFilter = ({ selectedStatus, setSelectedStatus }) => {
    return (
      <div className="filter-container">
        <label>
          <strong>Filter by: </strong>
        </label>
        <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
          <option value="All">All</option> {/* Added "All" option */}
          <option value="Open">Open</option>
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
            {selectedStatus === 'Closed' && (
              <>
                <th>Resolution</th>
                <th>Resolution Date</th>
              </>
            )}
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
                {selectedStatus === 'Closed' && (
                  <>
                    <td>{incident.resolutionDescription}</td>
                    <td>{incident.resolutionDate}</td>
                  </>
                )}
              </tr>
              {expandedIncidentId === incident.id && (
                <tr className="expanded-row">
                  <td colSpan="6">
                    <div className="incident-details">
                      <p>
                        <b>Reporter: </b>
                        {incident.assignedTo}
                      </p>
                      <p>
                        <b>Date Created: </b>
                        {incident.dateOfIncident}
                      </p>
                      <p>
                        <b>Description: </b>
                        {incident.incidentDescription}
                      </p>
                      {incident.status === 'In Progress' && (
                        <div className="complete-section">
                          <label>
                            <strong>Resolution: </strong>
                          </label>
                          <textarea
                            rows="3"
                            value={resolutionDescription}
                            onChange={handleResolutionChange}
                            placeholder="Enter resolution"
                          />
                          <label>
                            <strong>Resolution Date: </strong>
                          </label>
                          <input
                            type="date"
                            value={resolutionDate}
                            onChange={handleResolutionDateChange}
                          />
                          <button onClick={() => completeIncident(incident.id)}>Complete</button>
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

const Incident = () => {
  return (
    <div className='navbar'>
      <Navbar />
      <div className="container">
        <h1 className="page-heading">Reported Incidents</h1>
        <IncidentTable />
      </div>
    </div>
  );
};

export default Incident;