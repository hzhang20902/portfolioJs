import * as React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@mui/material';

import styles from '../../styles/Global';

import BasicMenu from './MenuButton';
import { NavButton } from '../higherorder/StyledComp';

const NavBar = () => {

  const sxStyle={ flexGrow: 1, fontWeight: "bold", letterSpacing: 1, color: 'white' }

  return (
  
    <AppBar>
      <Toolbar variant='dense' sx={{ backgroundColor: "rgba(13, 78, 217, 0.94)" }}>
        <BasicMenu />

        <NavButton className={styles.mobileBtn}>
          <Link to={"/"} className="nav-link">
            <Typography sx={sxStyle}>
              Welcome
            </Typography>
          </Link>
        </NavButton>

        <NavButton className={styles.mobileBtn}>
          <Link to={"/home"} className="nav-link">
            <Typography sx={sxStyle}>
            Projects
            </Typography>
          </Link>
        </NavButton>

        <NavButton className={styles.mobileBtn}>
          <Link to={"/about"} className="nav-link">
            <Typography sx={sxStyle}>
            About
            </Typography>
          </Link>
        </NavButton>

        <NavButton className={styles.mobileBtn}>
          <Link to={"/contact"} className="nav-link">
            <Typography sx={sxStyle}>
            Contact
            </Typography>
          </Link>
        </NavButton>

        <NavButton className={styles.mobileBtn}>
           <a target="_blank" rel='noreferrer' href="https://www.venmo.com/u/figgsboson" className='nav-link'>
            <Typography sx={sxStyle}>
              Support
            </Typography>
          </a>
        </NavButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;