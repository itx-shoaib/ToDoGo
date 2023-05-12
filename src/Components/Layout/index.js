import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
} from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {


  return (
    <Box sx={{ display: "flex",flexDirection:"column" }}>
      <CssBaseline />
      <Navbar/>
      <Box
        component="main"
        sx={{ padding: "1.5rem 2rem" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
