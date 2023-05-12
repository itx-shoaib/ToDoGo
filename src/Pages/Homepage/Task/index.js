import { Box } from "@mui/material";
import React from "react";
import TaskHead from "./TaskHead";
import TaskCard from "./TaskCard"

function Task() {
  return (
    <Box sx={{display: "flex",flexDirection:"column",justifyContent:"center"}}>
      <TaskHead/>
      <TaskCard/>
      <TaskCard/>
    </Box>
  );
}

export default Task;
