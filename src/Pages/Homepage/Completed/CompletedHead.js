import { Box, Typography } from "@mui/material";

import React from "react";
import { SearchField } from "../../../Components";

function CompletedHead() {
  return (
    <>
      <Typography sx={{ color: "white" }} variant="h6">
      Completed
      </Typography>
      <Box sx={{display:"flex",justifyContent:"end",marginRight:"20px"}}>
      <SearchField/>
      </Box>
    </>
  );
}

export default CompletedHead;
