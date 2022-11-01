import * as React from 'react';
import { useState } from 'react';
import { 
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography } from '@mui/material'

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CloseIcon from "@mui/icons-material/Close"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SButton, MainContainer } from './higherorder/StyledComp';

import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../services/auth.service';

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
  const [open, setOpen] = useState(true)
  const [status, setStatus] = useState("Sign Up")
  const [resMessage, setResMessage] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    let response = AuthService.register(data);
    setStatus("Sending...")
    response.then((response) => {
        setResMessage('');
        if (response.status === 200){
            console.log(response.data);
        }
        setStatus("Success!")
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
        setStatus("Sign Up")
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  };

  const action = (
    <div>
      <Button color="secondary" size="small" onClick={handleClose}>
        CLOSE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
  );

  return (
    <MainContainer> 
   
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
             
              <SButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ ml: 4 }}
              >
                {status}
              </SButton>
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
          <Snackbar
            open={open}
            autoHideDuration={20000}
            onClose={handleClose}
            message="When you register, you'll be assigned a unique JSON Web Token. Even though I have access to the DB, your password is hashed and I will never be able to know what it is!"
            action={action}
          />
        </Grid>
        
        
      </Grid>
      
      
    </ThemeProvider>
    
    
    </MainContainer>
    
  );
};

export default NewRegister;