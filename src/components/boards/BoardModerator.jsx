import React from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from "@mui/material";
import { ModBoard } from "../ContentOverlay";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7%;
    z-index: 99;
    
`;

const Logo = styled.div`
    margin: 0;
    font-weight: 700;
    font-size: 45px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'transparent',
    },
    gridContainer: {
      width: '100%',
      backgroundColor: 'transparent',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    padding: {
      padding: 5,
      display: 'flex',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      padding: '7px 30px',
      border: '2px solid black',
      backgroundColor: 'transparent',

      [theme.breakpoints.down('xs')]: {
        marginTop: '10%',
        width: '70%',
       
      }
    },
  }));


const BoardModerator = () => {
    const classes = useStyles();
   
    return(
        <TopSectionContainer className="fadeRightMini">
        <Paper elevation={10} className={classes.paper}>
                <Grid item xs={12} md={6} className={classes.padding}>
                    <Typography>
                    <Logo sx={{ display: 'flex', flexDirection: 'column' }}>
                        Member List
                    </Logo>
                    </Typography>
                </Grid>
        </Paper>
        <Paper elevation={30} className="fadeLeftMini">
             <Grid container className={classes.gridContainer} columns={4}>
                <Grid item xs={12} md={6} className={classes.padding}>
                    <ModBoard />
                </Grid>
            </Grid>
        </Paper>
      
        </TopSectionContainer>
    )
};
export default BoardModerator;