import * as React from 'react';
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import styled from 'styled-components';


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
      <Link color="inherit" href="https://github.com/hzhang20902">
        Henry Zhang
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const NewLogin = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const [resMessage, setResMessage] = useState('');

    const onSubmit = async(data) => {
        let response = AuthService.login(data);
        response.then((response) => {
            setResMessage('');
            if (response.status === 200){
                console.log(response.data);

            }
            navigate('/home');
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            if (error.response.status === 500){
                setResMessage('Something went wrong. Idk maybe try again? *shrugs*');
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
            // backgroundImage: 'url("../assets/absEarth.png")',
            backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            // backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" margin='1em'>
              Default Login: 
              "RuralJuror"
            </Typography>
            <Typography component="h1" variant="h5" marginBottom={1}>
              Password: "123031"
            </Typography>
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
              {errors?.username && 'Username is required'}
            </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.password && 'Password is required'}
            </Typography>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <UButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </UButton>
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {resMessage && `${resMessage}`}
            </Typography>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='register' variant="body2">
                    Sign Up
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

export default NewLogin;