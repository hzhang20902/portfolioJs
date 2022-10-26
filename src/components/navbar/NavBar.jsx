import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material';

import styled from 'styled-components';
import styles from '../../styles/Global';

import BasicMenu from './MenuButton';

const UButton = styled.button`
    outline: none;
    border: none;
    background-color: #3F5BE5;
    color: #fff;
    font-size: 1px;
    border-radius: 3px;
    text-shadow: 1px 1px 15px gray;
    margin-right: 1%;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 140, 1);
        color: #3F5BE5;
       
    }

`

const useStyles = makeStyles((theme) => ({
 
  gridContainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',

  },
}));
export default function NavBar() {

  const classes = useStyles();

  return (
  
    <AppBar className={classes.gridContainer}>
      <Toolbar variant='dense' sx={{ backgroundColor: "#3F5BE5", opacity: '1' }}>
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
            Projects
            </Typography>
          </Link>
        </UButton>

        <UButton className={styles.mobileBtn}>
           <a target="_blank" rel='noreferrer' href="https://www.venmo.com/u/figgsboson" className='nav-link'>
            <Typography variant="h6" sx={{ flexGrow: 1, "font-weight": "bold", letterSpacing: 1 }}>
              Donate
            </Typography>
          </a>
        </UButton>
      </Toolbar>
    </AppBar>
  );
}