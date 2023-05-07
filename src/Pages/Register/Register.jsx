import React from "react";
import { Button, TextField } from "@mui/material";

export const Register = () => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confrimpassword"
        label="Confirm Password"
        type="password"
        id="confrimpassword"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
    </>
  );
};
