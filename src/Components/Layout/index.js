import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Badge,
  IconButton,
  Stack,
  Typography,
  Toolbar,
} from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", padding: "1.5rem 2rem" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
