import { Box, Typography } from "@mui/material";

import React from "react";
import { AddButton } from "../../../Components/AddButton";
import { SearchField } from "../../../Components";

function ReminderHead() {
  return (
    <>
      <Typography sx={{ color: "white" }} variant="h6">
      Reminder
      </Typography>
      <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
      <AddButton/>
      <SearchField/>
      </Box>
    </>
  );
}

export default ReminderHead;
