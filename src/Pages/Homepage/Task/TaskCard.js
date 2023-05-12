import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function TasCard() {
  return (
    <Card sx={{margin:"20px"}}>
      <CardContent sx={{padding:"15px"}}>
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2">
          Description
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"end"}}>
        <Button size="small">See Detail</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}