

import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Report, List as ListIcon } from '@mui/icons-material'; // Import icons


function Sidepanel(props) {
  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.onClose}>
      <div id="mySidepanel" className={`sidepanel ${props.isOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={props.onClose}>
          &times;
        </a>
        <List>
          <ListItem button component={Link} to="/employee/dashboard/:email" className="sidepanel-item">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/employee/incident_form" className="sidepanel-item">
            <ListItemIcon>
              <Report />
            </ListItemIcon>
            <ListItemText primary="Report an Incident" />
          </ListItem>
          <ListItem button component={Link} to="/employee/incident_list/:email" className="sidepanel-item">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Incident List" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default Sidepanel;

