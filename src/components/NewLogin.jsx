import * as React from 'react';
import { useState } from 'react';
import { 
  Alert,
  Avatar,
  Box,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SButton, MainContainer } from './higherorder/StyledComp';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';


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
  const [open, setOpen] = useState(true)
  const [resMessage, setResMessage] = useState('');
  const [status, setStatus] = useState("Sign In")
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    setStatus("Sending...")
    let response = AuthService.login(data);
    response.then((response) => {
        setResMessage('');
        if (response.status === 200){
            console.log(response.data);
        }
        setStatus("Success!")
        navigate('/profile', {state:false});
        window.location.reload();
    })
    .catch((error) => {
        console.log(error);
        if (error.response.status === 500){
            setResMessage('Something went wrong. Idk maybe try again? *shrugs*');
        } else {
            setResMessage(error.response.data.message);
        }
        setStatus("Sign In")
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  };

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
            backgroundImage: "url(https://source.unsplash.com/random/?city,night)",
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h2" variant="h6" margin='1em'>
              Default Login: 
              "RuralJuror"
            </Typography>
            <Typography component="h2" variant="h6" marginBottom={1}>
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
              <SButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {status}
              </SButton>
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {resMessage && `${resMessage}`}
            </Typography>
              <Grid container>
                <Grid item xs>
                  <Link href='forgot' variant="body2">
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
          <Snackbar open={open} autoHideDuration={12000} onClose={handleClose}>
            <Alert severity='success'>
            Login with the default credentials listed above, or register your own user profile!
              <IconButton size="small" aria-label="close" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Alert>
          </Snackbar>
        </Grid>
        
        
      </Grid>
      
      
    </ThemeProvider>
    
    
    </MainContainer>
    
  );
};

export default NewLogin;