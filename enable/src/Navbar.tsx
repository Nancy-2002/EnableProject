import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CardMedia from '@mui/material/CardMedia';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow:0 }}>
      <AppBar position="static" sx={{ backgroundColor: 'crimson' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: -38, ml:-42 }}>
            <MenuIcon />
          </IconButton>
          <img
            src="D:/ProjectEnable/enable/public/logo.jpeg"
            srcSet="D:/ProjectEnable/enable/public/logo.jpeg"
            alt="LOGO"
            loading="lazy"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

