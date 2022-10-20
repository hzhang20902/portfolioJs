import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { List, Divider, ListItem, Grid, Paper, Typography } from "@mui/material";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 92.9%;
    bottom: 0;
    left: 0;
    background-color: #1755dd42;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%;
    z-index: 99;
    
`;

const Logo = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 45px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '800px',
      margin: '5px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%'
      }
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 5,
    },
    paper: {
      padding: '7px 30px',
      border: '2px solid black',
    },
  }));

const BoardUser = () => {
    const classes = useStyles();
    const [content, setContent]  = useState("");

    useEffect(() => {
        UserService.getUserBoard().then(
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
                    <Logo>
                        List of Users (User Access)
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
    );
};
export default BoardUser;