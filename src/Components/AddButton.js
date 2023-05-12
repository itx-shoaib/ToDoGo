import { Button } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import React from 'react'

export function AddButton({onClick}) {
  return (
    <Button variant="contained" onClick={onClick}>
    <AddIcon />
  </Button>
  )
}
