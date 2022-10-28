import * as React from 'react';
import { useState } from 'react';
import { 
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography } from '@mui/material'

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../services/auth.service';



const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
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



const NewRegister = () => {
  const [resMessage, setResMessage] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    let response = AuthService.register(data);
    response.then((response) => {
        setResMessage('');
        if (response.status === 200){
            console.log(response.data);
        }
        navigate('/login', {state:true});
        window.location.reload();
    })
    .catch((error) => {
        console.log(error);
        if (error.response.status === 500){
            setResMessage('Something went wrong. Idk maybe try again? *shrugs*');
       
        } else if(error.response.status === 400) {
            setResMessage(error.response.data.message)
        } else {
            setResMessage(error.response.data.message);
        }
    });
  }

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
              <AppRegistrationIcon />
            </Avatar>
           

           <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                type="text"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                {...register("username", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.username && 'Username already in use'}
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
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                {...register("password", { required: true, min: '6' })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.password && 'Password is required/minimum 6 characters'}
            </Typography>
             
              <UButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </UButton>
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {resMessage && `${resMessage}`}
            </Typography>
              <Grid container sx={{ justifyContent:'center', alignItems: 'center'}}>
                <Grid item>
                  <Link to='/login' state={true} variant="body2">
                    Already registered?
                  </Link>
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

export default NewRegister;