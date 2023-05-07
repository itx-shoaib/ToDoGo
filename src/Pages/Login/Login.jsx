import React from 'react'
import { Typography, Button, Stack, Box } from "@mui/material";

export function Login() {
    return (
      <>
      <Stack direction="row" justifyContent="center" sx={{height:"100vh"}}>
        <Box  sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems:"center",
              textAlign:"center"
            }}>
          <Typography variant="h1" sx={{marginBottom:"5px"}}>Welcome to the Azra Care Dashboard</Typography>
          <Typography variant="body1">
          Bringing order to the post-operative chaos - Log in here
          </Typography>
            <Button
            sx={{ marginTop: "1rem",background:"#816179",width:"25%" }}
            variant="contained"
          >
            Login
          </Button>
        </Box>
        </Stack>
      </>
    );
}