import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, MenuItem, IconButton }from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import AuthService from '../../services/auth.service';

const sxStyling = {fontSize: 20, 
  fontWeight: 'bold',
  color: 'rgba(13, 78, 217, 0.94)',
  }

const BasicMenu = () => {
  

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined)
    setShowAdminBoard(false);
    setShowModeratorBoard(false);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge='start'
        sx={{color: 'white'}}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        selected
        variant='menu'
        className='fadeLeftMini'
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        PaperProps={{
          style: {
            width: 360,
            opacity: '0.8',
          }
        }}
      >

        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/">
        Home</MenuItem>

        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/about">
        About</MenuItem>

        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/projects">
        Projects</MenuItem>

        {currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/profile">
        {currentUser.username}</MenuItem>
        )}

        {currentUser && showModeratorBoard && (
        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/mod">
        Mod Dash</MenuItem>
        )}

        {currentUser && showAdminBoard && (
        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/admin">
        *ADMIN ACCESS*</MenuItem>
        )}

        {currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/login" state={true} onClick={logOut}>
        Logout</MenuItem>
        )}

        {!currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/login" state={true}>
        Login</MenuItem>
        )}

        {!currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/register">
        Signup</MenuItem>
        )}

        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/skills">
        Skills</MenuItem>

        <MenuItem className='fadeRightMini' sx={sxStyling} onClick={()=>window.scrollY(0)} component={Link} to="/contact">
        Contact</MenuItem>
        
      </Menu>
    </div>
  );
 }

 export default BasicMenu;