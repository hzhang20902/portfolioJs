import * as React from 'react';
import { useState } from 'react';
import { 
  Avatar,
  Alert,
  Box,
  CssBaseline,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import assets from '../assets';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SButton, MainContainer } from './higherorder/StyledComp';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


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
    return axios.post( "https://expressapicontactform.herokuapp.com/contact", {
        name: data.name,
        email: data.email,
        message: data.message,
    })
};



const ContactPage = () => {
    const [open, setOpen] = useState(true);
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
        navigate('/')
    };

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
            <Avatar sx={{ m: 1, bgcolor: 'white' }}>
              <img src={assets.gmail} alt="gmail icon" style={{padding: "5px"}} />
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
             
              <SButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ ml: 2 }}
              >
                {status}
              </SButton>
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {resMessage && `${resMessage}`}
            </Typography>
              <Grid container sx={{ margin:'auto', justifyContent:'center', alignItems: 'center'}}>
                <Grid item>
                  <a target="_blank" rel='noreferrer' href="https://www.venmo.com/u/figgsboson">
                    Support my work
                  </a>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </form>
          </Box>
          <Snackbar open={open} autoHideDuration={12000} onClose={handleClose}>
            <Alert severity='success'>
            This contact form uses a second server, created with Express.js as a standalone API, to relay messages to my Gmail.
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

export default ContactPage;