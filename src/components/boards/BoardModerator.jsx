import React from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from "@mui/material";
import { ModBoard } from "../ContentOverlay";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    padding: 10%;
    z-index: 99;
    
`;

const Logo = styled.div`
    margin: 0;
    font-weight: 700;
    font-size: 45px;
    color: white;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    gridContainer: {
      width: '100%',
      backgroundColor: 'black',
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
      flexDirection: 'row',
      padding: '2px 3px',
      border: '2px solid black',
      backgroundColor: 'black',

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

               
              
                    <Logo sx={{ display: 'flex', flexDirection: 'column' }}>
                        Users
                    </Logo>
             
       
        <Paper elevation={4} className="fadeLeftMini">
             <Grid container spacing={1} className={classes.gridContainer} columns={12}>
                
                    <ModBoard />
                
            </Grid>
        </Paper>
      
        </TopSectionContainer>
    )
};
export default BoardModerator;