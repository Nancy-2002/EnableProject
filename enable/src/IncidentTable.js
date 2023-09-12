// import React, { useState } from 'react';
// import './incidentlist.css';


// const IncidentTable = ({ incidents }) => {
//   const [selectedIncident, setSelectedIncident] = useState(null);

//   const toggleDescription = (incidentId) => {
//     if (selectedIncident === incidentId) {
//       setSelectedIncident(null);
//     } else {
//       setSelectedIncident(incidentId);
//     }
//   };

//   return (
//     <table className="incident-table">
//       <thead>
//         <tr>
//           <th>S.No</th>
//           <th>Title</th>
//           <th>Priority</th>
//           <th>Status</th>
//           <th>Date Created</th>
//         </tr>
//       </thead>
//       <tbody>
//         {incidents.map((incident, index) => (
//           <React.Fragment key={incident.id}>
//             <tr>
//               <td>{index + 1}</td>
//               <td onClick={() => toggleDescription(incident.id)} className="clickable-incident">
//                 {incident.title}
//               </td>
//               <td>{incident.priority}</td>
//               <td>{incident.status}</td>
//               <td>{incident.date}</td>
//             </tr>
//             {selectedIncident === incident.id && (
//               <tr>
//                 <td colSpan="5">
//                   <h3>Description</h3>
//                   <p>{incident.description}</p>
//                 </td>
//               </tr>
//             )}
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default IncidentTable;