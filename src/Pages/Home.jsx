import React from 'react'
import "../App.css";
import { Typography, Button, Box, Grid, TextField, CssBaseline, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Login } from './Login/Login';

function Home (){
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box className="loginBox" >
      <Typography component="h1" variant="h5">
        Welcome To ToDoGo!
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Login/>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  )
}

export default Home;
