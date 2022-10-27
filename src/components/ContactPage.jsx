import * as React from 'react';
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MessageIcon from '@mui/icons-material/Message';

import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    z-index: 99;
    object-fit: cover;
    padding-top: 1.5em;
    
`;

const UButton = styled.button`
    outline: none;
    border: none;
    background-color: rgba(13, 78, 217, 0.94);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
    padding: 8px 2em;
    margin-top: 2em;
    cursor: pointer;
    margin-left: 2em;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: transparent;
        color: rgba(13, 78, 217, 0.94);
        border: 2px solid rgba(13, 78, 217, 0.94);
    }

`

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a target="_blank" rel='noreferrer' href="https://github.com/hzhang20902">
        Henry Zhang
        </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const contactSubmit = (data) => {
    return axios.post("https://jwtportfoliofrontend.vercel.app//contact", {
        name: data.name,
        email: data.email,
        message: data.message,
    });
};



const ContactPage = () => {

    const [status, setStatus] = useState("Submit");
    const [resMessage, setResMessage] = useState('');
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

    const onSubmit = async (data) => {
        setStatus("Sending...");
        setResMessage('');
        let response = contactSubmit(data);
        response.then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
           
        })
        .catch((error) => {
            console.log(error)
        })
        alert((await response).data.status);
        setStatus("Submit");
        window.location.reload()
    };

  return (
    <TopSectionContainer> 
   
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundPosition: 'center',
          }}
        >
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <MessageIcon />
            </Avatar>
           

           <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                type="text"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                {...register("name", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.username && 'Name cannot be blank!'}
            </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.password && 'Email is required'}
            </Typography>
            <TextField
                margin="dense"
                required
                fullWidth
                multiline
                minRows='6'
                maxRows='10'
                name="message"
                label="Message"
                type="text"
                id="message"
                {...register("message", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.password && 'Message cannot be blank!'}
            </Typography>
             
              <UButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {status}
              </UButton>
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {resMessage && `${resMessage}`}
            </Typography>
              <Grid container sx={{ justifyContent:'center', alignItems: 'center'}}>
                <Grid item>
                  <a target="_blank" rel='noreferrer' href="https://www.venmo.com/u/figgsboson">
                    Support my work!
                  </a>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </form>
          </Box>
        </Grid>
        
        
      </Grid>
      
      
    </ThemeProvider>
    
    
    </TopSectionContainer>
    
  );
};

export default ContactPage;