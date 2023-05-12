import { Box, Typography } from "@mui/material";

import React from "react";
import { AddButton } from "../../../Components/AddButton";
import { SearchField } from "../../../Components";

function TaskHead() {
  return (
    <>
      <Typography sx={{ color: "white" }} variant="h6">
        Task
      </Typography>
      <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
      <AddButton/>
      <SearchField/>
      </Box>
    </>
  );
}

export default TaskHead;
