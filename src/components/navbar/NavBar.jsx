import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import { Typography } from '@mui/material';


import styled from 'styled-components';
import styles from '../../styles/Global';

import BasicMenu from './MenuButton';

const UButton = styled.button`
    outline: none;
    border: none;
    background-color: rgba(13, 78, 217, 0.94);
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

export default function NavBar() {

  const sxStyle={ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }

  return (
  
    <AppBar>
      <Toolbar variant='dense' sx={{ backgroundColor: "rgba(13, 78, 217, 0.94)" }}>
        <BasicMenu />

        <UButton className={styles.mobileBtn}>
          <Link to={"/"} className="nav-link">
            <Typography variant="h6" sx={sxStyle}>
              Welcome
            </Typography>
          </Link>
        </UButton>

        <UButton className={styles.mobileBtn}>
          <Link to={"/home"} className="nav-link">
            <Typography variant="h6" sx={sxStyle}>
            Projects
            </Typography>
          </Link>
        </UButton>

        <UButton className={styles.mobileBtn}>
          <Link to={"/about"} className="nav-link">
            <Typography variant="h6" sx={sxStyle}>
            About
            </Typography>
          </Link>
        </UButton>

        <UButton className={styles.mobileBtn}>
          <Link to={"/contact"} className="nav-link">
            <Typography variant="h6" sx={sxStyle}>
            Contact
            </Typography>
          </Link>
        </UButton>

        <UButton className={styles.mobileBtn}>
           <a target="_blank" rel='noreferrer' href="https://www.venmo.com/u/figgsboson" className='nav-link'>
            <Typography variant="h6" sx={sxStyle}>
              Support
            </Typography>
          </a>
        </UButton>
      </Toolbar>
    </AppBar>
  );
}