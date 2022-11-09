import * as React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@mui/material';

import styles from '../../styles/Global';
import styled from 'styled-components';

import BasicMenu from './MenuButton';
import { NavButton } from '../higherorder/StyledComp';

const AppB = styled(AppBar)`
  opacity: .6;
  &:hover{ opacity: 1;
    transition: opacity 250ms ease-in-out;}
`;


const sxStyle={ flexGrow: 1, fontWeight: "bold", letterSpacing: 1, color: "rgba(13, 78, 217, 0.94)" }


const NavBar = () => {

  return (
  
    <AppB color='transparent'>
      <Toolbar variant='dense' sx={{ backgroundColor: "transparent"}}>
        <BasicMenu />

        <NavButton className={styles.mobileBtn}>
          <Link to={"/"} className="nav-link" onClick={()=>window.scrollY(0)}>
            <Typography sx={sxStyle}>
              Home
            </Typography>
          </Link>
        </NavButton>

        <NavButton className={styles.mobileBtn}>
          <Link to={"/about"} className="nav-link" onClick={()=>window.scrollY(0)}>
            <Typography sx={sxStyle}>
            About
            </Typography>
          </Link>
        </NavButton>

        <NavButton className={styles.mobileBtn}>
          <Link to={"/projects"} className="nav-link" onClick={()=>window.scrollY(0)}>
            <Typography sx={sxStyle}>
            Projects
            </Typography>
          </Link>
        </NavButton>

        <NavButton className={styles.mobileBtn}>
          <Link to={"/skills"} className="nav-link" onClick={()=>window.scrollY(0)}>
            <Typography sx={sxStyle}>
            Skills
            </Typography>
          </Link>
        </NavButton>
        
        <NavButton className={styles.mobileBtn}>
          <Link to={"/contact"} className="nav-link" onClick={()=>window.scrollY(0)}>
            <Typography sx={sxStyle}>
            Contact
            </Typography>
          </Link>
        </NavButton>

        {/* <NavButton className={styles.mobileBtn}>
           <a target="_blank" rel='noreferrer' href="https://www.venmo.com/u/figgsboson" className='nav-link'>
            <Typography sx={sxStyle}>
              Support
            </Typography>
          </a>
        </NavButton> */}
      </Toolbar>
    </AppB>
  );
}

export default NavBar;