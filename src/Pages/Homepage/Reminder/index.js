import { Box } from "@mui/material";
import React from "react";
import ReminderHead from "./ReminderHead";
import ReminderCard from "./ReminderCard"

function Reminder() {
  return (
    <Box sx={{display: "flex",flexDirection:"column",justifyContent:"center"}}>
      <ReminderHead/>
      <ReminderCard/>
      <ReminderCard/>
    </Box>
  );
}

export default Reminder;
