import React from 'react';
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CardMedia from '@mui/material/CardMedia';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home'
import { Link, useNavigate } from 'react-router-dom';

const role = localStorage.getItem('role');

export default function Navbar() {
  const handleLogout = () => {
    // Handle logout logic here
  };

  let link;

  // Conditionally render links based on the role
  if (role === 'admin') {
    link="/admin/dashboard"
  } else if (role === 'team') {
    link ="/employee/dashboard/:email"
  } else if (role === 'support') {
    link="/support/incident"
  }else{
    link="/"
  }

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <AppBar position="static" sx={{ backgroundColor: 'crimson' , height: '60px'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: -38, ml: -42 }}>
            <MenuIcon />
          </IconButton>
          {/* Use the imported logo variable as the src */}
          <img
            src="/logo.jpeg"
            srcSet="/logo.jpeg"
            alt="LOGO"
            loading="lazy"
            style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }}
          />
          <Box sx={{ position: 'absolute', top: '50%', right: '16px', transform: 'translateY(-50%)' }}>
            {/* Add the logout button with styling */}
            {/* <Button variant="outlined" color="inherit" onClick={handleLogout}>
              Logout
            </Button> */}
            <Link to={link} class="icon"><HomeIcon/></Link>
            <Link to="/" class="icon"><LogoutIcon/></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}