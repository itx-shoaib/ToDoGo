import { Box } from "@mui/material";
import React from "react";
import CompletedHead from "./CompletedHead";
import CompletedCard from "./CompletedCard"

function Completed() {
  return (
    <Box sx={{display: "flex",flexDirection:"column",justifyContent:"center"}}>
      <CompletedHead/>
      <CompletedCard/>
      <CompletedCard/>
    </Box>
  );
}

export default Completed;
