// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { getIncidentList } from './services/userService';
// import Navbar from './Navbar.tsx';
// import Sidebar from './Sidebar';
// import './incidentlist.css';

// function IncidentList() {
//   const location = useLocation();
//   const [incidentData, setIncidentData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchIncidentData = async () => {
//       try {
//         const email = localStorage.getItem('email')
//         if (email) {
//           const data = await getIncidentList(email);
//           setIncidentData(data);
//         }
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchIncidentData();
//   }, [location.state]);

//   return (
//     <div>
//       <Navbar />
//       <Sidebar />
//       <h2>Incident List</h2>
//       {error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Incident Title</th>
//               <th>Incident Description</th>
//               <th>Location</th>
//               <th>Cubicle</th>
//               <th>Category</th>
//               <th>Priority</th>
//             </tr>
//           </thead>
//           <tbody>
//             {incidentData.map((incident) => (
//               <tr key={incident.id}>
//                 <td>{incident.incidentTitle}</td>
//                 <td>{incident.incidentDescription}</td>
//                 <td>{incident.location}</td>
//                 <td>{incident.cubicle}</td>
//                 <td>{incident.category}</td>
//                 <td>{incident.priority}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default IncidentList


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getIncidentList } from './services/userService';
import Navbar from './Navibar.js';
import Sidebar from './Sidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';


function IncidentList() {
  const location = useLocation();
  const [incidentData, setIncidentData] = useState([]);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    const fetchIncidentData = async () => {
      try {
        const email = localStorage.getItem('email');
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

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredIncidentData = incidentData.filter((incident) => {
    if (filterStatus === 'All') {
      return true;
    }
    return incident.status === filterStatus;
  });

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        Incident List
      </Typography>
      <div >
      <Select
  label="Filter by Status"
  value={filterStatus}
  onChange={handleFilterChange}
  style={{ marginLeft: '72px' }} // Add margin to move the dropdown away from the margin
>
  <MenuItem value="All">All</MenuItem>
  <MenuItem value="Open">Open</MenuItem>
  <MenuItem value="Closed">Closed</MenuItem>
  <MenuItem value="In Progress">In Progress</MenuItem>
</Select>
      </div>
      {error ? (
        <Typography color="error">Error: {error.message}</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ maxWidth: '90%', margin: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '1.1rem',fontWeight: 'bold' }}>Incident Title</TableCell>
                <TableCell sx={{ fontSize: '1.1rem',fontWeight: 'bold' }}>Incident Description</TableCell>
                <TableCell sx={{ fontSize: '1.1rem',fontWeight: 'bold' }}>Location</TableCell>
                <TableCell sx={{ fontSize: '1.1rem',fontWeight: 'bold' }}>Cubicle</TableCell>
                <TableCell sx={{ fontSize: '1.1rem',fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ fontSize: '1.1rem',fontWeight: 'bold' }}>Priority</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredIncidentData.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell>{incident.incidentTitle}</TableCell>
                  <TableCell>{incident.incidentDescription}</TableCell>
                  <TableCell>{incident.location}</TableCell>
                  <TableCell>{incident.cubicle}</TableCell>
                  <TableCell>{incident.category}</TableCell>
                  <TableCell>{incident.priority}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default IncidentList;
