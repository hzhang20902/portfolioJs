import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material';

import styled from 'styled-components';
import styles from '../../styles/Global';

import BasicMenu from './MenuButton';
import AuthService from '../../services/auth.service';

const UButton = styled.button`
    outline: none;
    border: none;
    background-color: rgba(14, 83, 197, 0.65);
    color: #fff;
    font-size: 1px;
    border-radius: 3px
    margin-right: 1%;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 140, 1);
        color: rgba(14, 83, 197, 0.65);
        border: 1px solid white;
    }

`

const useStyles = makeStyles((theme) => ({
  appBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      objectFit: 'fill',
      width: '100%',

      backgroundColor: 'rgba(13, 78, 217, 0.94)',

      [theme.breakpoints.down('xs')]: {
          width: '30%',
          height: '10%',
          overflow: 'scroll',
          '-webkit-flex-flow': 'row wrap',
      }
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'left',
    width: '100%',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
    },
  },
}));
export default function NavBar() {

  const classes = useStyles();
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();
  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }
  // }, []);

  // const logOut = () => {
  //   AuthService.logout();
  // };

  return (
  <div>
    <AppBar className={classes.gridContainer}>
      <Toolbar variant='dense' sx={{ backgroundColor: "rgba(13, 78, 217, 0.94)", }}>
        <BasicMenu />

        <UButton className={styles.mobileBtn}>
          <Link to={"/"} className="nav-link">
            <Typography variant="h6" sx={{ flexGrow: 1, "font-weight": "bold", letterSpacing: 1 }}>
              Welcome
            </Typography>
          </Link>
        </UButton>

        <UButton className={styles.mobileBtn}>
          <Link to={"/home"} className="nav-link">
            <Typography variant="h6" sx={{ flexGrow: 1, "font-weight": "bold", letterSpacing: 1 }}>
            About
            </Typography>
          </Link>
        </UButton>

      {/* {currentUser && (
        <UButton>
          <Link to={"/map"} className="nav-link">
            <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 1 }}>
              Co-Map
            </Typography>
          </Link>
        </UButton>
      )}

      {showModeratorBoard && (
        <UButton>
          <Link to={"/mod"} className="nav-link">
            <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 1 }}>
              Moderator Board
            </Typography>
          </Link>
        </UButton>
          
      )}
      {showAdminBoard && (
        <UButton>
          <Link to={"/admin"} className="nav-link">
            <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 1 }}>
              Admin Board
            </Typography>
          </Link>
        </UButton>
      )}
      
      {currentUser ? (
        <>
          <UButton>
            <Link to={"/profile"} className="nav-link">
              <Typography variant="h6" sx={{ flexGrow: 1,  letterSpacing: 1 }}>
                {currentUser.username}
              </Typography>
            </Link>
          </UButton>

          <UButton sx={{color: 'black',}}>
            <Typography variant="h6" sx={{ flexGrow: 1, "font-weight": "bold", letterSpacing: 1 }}>
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </Typography>
          </UButton>
        </>
      ) : (
        <>
          <UButton>
            <Link to={"/login"} className="nav-link">
              <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 1 }}>
                Login
              </Typography>
            </Link>
          </UButton>

          <UButton>
            <Link to={"/register"} className="nav-link">
              <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 1 }}>
              Sign Up
              </Typography>
            </Link>
          </UButton>
        </>
      )} */}

        <UButton className={styles.mobileBtn}>
           <a target="_blank" rel='noreferrer' href="https://www.venmo.com/u/figgsboson" className='nav-link'>
            <Typography variant="h6" sx={{ flexGrow: 1, "font-weight": "bold", letterSpacing: 1 }}>
              Donate
            </Typography>
          </a>
        </UButton>
      </Toolbar>
    </AppBar>
  </div>
  );
}