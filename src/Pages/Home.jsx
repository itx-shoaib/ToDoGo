import React,{useState} from 'react'
import "../App.css";
import { Typography, Box, Grid, CssBaseline, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Login } from './Login/Login';
import { Register } from './Register/Register';

function Home (){
  const [signin, setSignin] = useState(true)
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box className="loginBox" >
      <Typography component="h1" variant="h5">
        Welcome To ToDoGo!
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>

      {signin?(
        <Login/>
      ):(
        <Register/>
      )}
        
        <Grid container>
          <Grid item xs>
          { signin && (<Link href="#" variant="body2">
              Forgot password?
            </Link>) }
            
          </Grid>
          <Grid item>
          {signin ? (
            <Typography variant="body2" onClick={()=>setSignin((prev)=>!prev)} sx={{cursor:"pointer"}}>
              {"Don't have an account? Sign Up"}
            </Typography>
          ):(
            <Typography variant="body2" onClick={()=>setSignin((prev)=>!prev)} sx={{cursor:"pointer"}}>
              {"Already have an account? Sign In"}
            </Typography>
          )}
            
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  )
}

export default Home;
