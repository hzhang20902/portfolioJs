import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from '@material-ui/core/styles';

import AuthService from '../../services/auth.service';


const useStyles = makeStyles((theme) => ({
  appBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      backgroundColor: 'rgba(14, 83, 197, 0.65)',

      [theme.breakpoints.down('xs')]: {
          width: '30%',
          height: '10%',
          overflow: 'scroll',
          '-webkit-flex-flow': 'row wrap',
      }
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height:'30%',
      overflow: 'scroll',
      '-webkit-flex-flow': 'row wrap',
      
    },
  },
}));

const BasicMenu = () => {

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
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        variant='menu'
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          dense: 'true',
          divider: 'true',
        }}
        PaperProps={{
          style: {
            width: 380,
          }
        }}
      >


        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/">Welcome</MenuItem>

        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/home">About</MenuItem>

        {currentUser && (
        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/profile">{currentUser.username}</MenuItem>
        )}

        {currentUser && showModeratorBoard && (
        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/mod">Mod Dash</MenuItem>
        )}

        {currentUser && showAdminBoard && (
        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/mod">Admin Access</MenuItem>
        )}

        {currentUser && (
        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/login" onClick={logOut}>Logout</MenuItem>
        )}


        {!currentUser && (
        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/login">Login</MenuItem>
        )}

        {!currentUser && (
        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component={Link} to="/register">Signup</MenuItem>
        )}

        <MenuItem sx={{ 
          fontSize: 20, 
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas', 
          fontWeight: 'bold',
          color: 'rgba(14, 83, 197, 0.65)'}} component='a' target='_blank' href="https://www.venmo.com/u/figgsboson">Donate</MenuItem>

      
  
      </Menu>
    </div>
  );
 }

 export default BasicMenu;