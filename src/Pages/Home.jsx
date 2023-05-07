import React, { useState } from "react";
import "../App.css";
import {
  Typography,
  Box,
  Grid,
  CssBaseline,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

function Home() {
  const [signin, setSignin] = useState(true);
  const [forgetPass, setForgetPass] = useState(false);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="loginBox">
        <Typography component="h1" variant="h5">
          Welcome To ToDoGo!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {!forgetPass && signin ? (
            <Login />
          ) : (
            <>{!forgetPass && <Register />}</>
          )}

          {forgetPass && (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => setForgetPass((prev) => !prev)}
              >
                Send
              </Button>
            </>
          )}

          <Grid container>
            <Grid item xs>
              {!forgetPass && signin && (
                <>
                  <Typography
                    variant="body2"
                    onClick={() => setForgetPass((prev) => !prev)}
                    sx={{ cursor: "pointer" }}
                  >
                    Forgot password?
                  </Typography>
                </>
              )}
            </Grid>
            <Grid item>
              {!forgetPass && signin ? (
                <Typography
                  variant="body2"
                  onClick={() => setSignin((prev) => !prev)}
                  sx={{ cursor: "pointer" }}
                >
                  {"Don't have an account? Sign Up"}
                </Typography>
              ) : (
                <>
                  {!forgetPass && (
                    <Typography
                      variant="body2"
                      onClick={() => setSignin((prev) => !prev)}
                      sx={{ cursor: "pointer" }}
                    >
                      {"Already have an account? Sign In"}
                    </Typography>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
