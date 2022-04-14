import Scheduler from '../Scheduler';
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



const MenteeBooking = () => {
    return (
    <>
      <MenteeSideBar/>
      <Scheduler/>


    </>
      );
  };
  
  export default MenteeBooking ;
  