import { useState } from 'react';
import MenteeSideBar from './MenteeSideBar';
// import MentorHeader from '../MentorHeader'; 
import { Checkbox, FormControlLabel, FormGroup, Button, Grid, Paper, TextField, Typography, Box, Container, styled, } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 500,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const MenteeHome = () => {
  const [MenteeName, setMenteeName]=useState('MenteeName');
    return (
    <>
      <MenteeSideBar/>
      <Box sx={{
        ml: 20,
        mt: 10,
        mr: 10
      }}>

      <Grid container>
        <Grid item xs={12} spacing={3}>
      <Typography variant='h4' >Hi, {MenteeName}!</Typography>
      <Typography  sx={{mt:5}}>You haven't booked any session yet,</Typography>
      </Grid>

      <Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  columnSpacing={1}
  sx={{mt:1}} >
      <Grid item>
      <Button variant="outlined" href=''>Book</Button> </Grid>
      <Grid item></Grid>
      <Typography>your sessions right now!</Typography></Grid>
      </Grid>
      
      </Box>
    </>
      );
  };
  
  export default MenteeHome ;
  