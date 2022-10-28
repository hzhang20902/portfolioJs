import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import AuthService from '../../services/auth.service';


const BasicMenu = () => {
  const sxStyling = {fontSize: 20, 
    fontWeight: 'bold',
    color: 'rgba(13, 78, 217, 0.94)'}

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
 
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        className='fadeLeftMini'
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        PaperProps={{
          style: {
            width: 360,
          }
        }}
      >


        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/">
        Welcome</MenuItem>

        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/home">
        Projects</MenuItem>

        {currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/profile">
        {currentUser.username}</MenuItem>
        )}

        {currentUser && showModeratorBoard && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/mod">
        Mod Dash</MenuItem>
        )}

        {currentUser && showAdminBoard && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/admin">
        *ADMIN ACCESS*</MenuItem>
        )}

        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/about">
        About</MenuItem>

        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/contact">
        Contact</MenuItem>

        {currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/login" state={true} onClick={logOut}>
        Logout</MenuItem>
        )}

        {!currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/login" state={true}>
        Login</MenuItem>
        )}

        {!currentUser && (
        <MenuItem className='fadeRightMini' sx={sxStyling} component={Link} to="/register">
        Signup</MenuItem>
        )}

        <MenuItem className='fadeRightMini' sx={sxStyling} component='a' target='_blank' href="https://www.venmo.com/u/figgsboson">
        Support</MenuItem>

      </Menu>
    </div>
  );
 }

 export default BasicMenu;