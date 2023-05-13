import { Box, Grid } from "@mui/material";
import React from "react";
import Task from "./Task";
import Reminder from "./Reminder"
import Completed from "./Completed"

function Homepage() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid items md={4} xs={12} >
        <Box sx={{background:"#5c5b5beb",color:"white",margin:"20px",textAlign: "center"}}>
        <Task/>
        </Box>
        </Grid>
        <Grid items md={4} xs={12} >
        <Box sx={{background:"#5c5b5beb",color:"white",margin:"20px",textAlign: "center"}}>
        <Reminder/>
        </Box>
        </Grid>
        <Grid items md={4} xs={12} >
        <Box sx={{background:"#5c5b5beb",color:"white",margin:"20px",textAlign: "center"}}>
        <Completed/>
        </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Homepage;
