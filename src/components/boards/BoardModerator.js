import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles'
import { List, Divider, ListItem, Grid, Paper, Typography } from "@mui/material";

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
    container: {
      width: '800px',
      margin: '5px 0',
      padding: 0,
      backgroundColor: 'transparent',
      [theme.breakpoints.down('xs')]: {
        width: '80%',
        padding: '1px'
      }
    },
    margin: {
      marginTop: 20,
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
    const [content, setContent]  = useState([]);

    useEffect(() => {
        UserService.getModeratorBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content = 
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
                setContent(_content);
            }
        );
    }, []);

    return(
        <TopSectionContainer className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
                <Grid item xs={12} md={6} className={classes.padding}>
                    <Typography>
                    <Logo sx={{ display: 'flex', flexDirection: 'column' }}>
                        List of Users
                    </Logo>
                    </Typography>
                </Grid>
        </Paper>
        <Paper elevation={10} className={classes.paper}>
             <Grid container className={classes.gridContainer} columns={2}>
                <Grid item xs={12} md={6} className={classes.padding}>
                    <List>
                    {content.slice(content.length-4, content.length).map((key) => (
                        <ListItem index={key.id}>
                        ID: {key.id}
                        <br />
                        Username: {key.username}
                        <br />
                        Email: {key.email}
                        <Divider />
                        </ListItem>
                    ))}
                    </List>
                </Grid>
            </Grid>
        </Paper>
      
        </TopSectionContainer>
    )
};
export default BoardModerator;