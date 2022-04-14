import MentorHeader from '../MentorHeader'; 
import MentorSideBar from '../MentorSideBar';
import { Checkbox, FormControlLabel, FormGroup, Button, Grid, Paper, TextField, Typography, Box, Container, styled, } from '@mui/material';
import { Link } from 'react-router-dom';
// import{ ArrowCircleRightIcon, FiberManualRecordIcon, FiberManualRecordOutlinedIcon } from '@mui/icons-material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const Item = styled(Paper)(({ theme }) => ({
  // padding: theme.spacing(1),
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // height: 500,
  // textAlign: 'center',
  // color: theme.palette.text.secondary,

}));

const Onboarding = () => {
    return (
        <>
      <MentorHeader/>
      <MentorSideBar/>
      <Box sx={{
        ml: 20,
        mt: 10,
        mr: 10
      }}>

        <Box sx={{
        border: 1,
        p:1,
       }}>
      <Typography>It looks like you have a couple more things to fill out before you can book your first
        mentoring session! Click each of the boxes below to complete your tasks (0/6)
      </Typography>
      </Box>

      <Grid container spacing={3} sx={{mt:5}}>
      <Grid item xs={4}>
      <Box sx={{
        border: 1,
        p:1,
        height: 50,
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
      }, }}>
      <Typography>
        Click here to view mentor training resources
      </Typography>
      </Box>
      </Grid>

      <Grid item xs={4}>
      <Box sx={{
        border: 1,
        p:1,
        height: 50,
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
      }, }}>
      <Typography>
        Click here to view the donations page (donations optional)
      </Typography>
      </Box>
      </Grid>

      <Grid item xs={4}>
      <Box sx={{
        border: 1,
        p:1,
        height: 50,
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
      }, }}>
      <Typography>
        Click here to complete your mentor profile
      </Typography>
      </Box>
      </Grid>

      <Grid item xs={4}>
      <Box sx={{
        border: 1,
        p:1,
        height: 50,
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
      }, }}>
      <Typography>
        Await mentor advisor approval / Click here to view your approval status
      </Typography>
      </Box>
      </Grid>

      <Grid item xs={4}>
      <Box sx={{
        border: 1,
        p:1,
        height: 50,
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
      }, }}>
      <Typography>
        Click here to sign up for [meta workplace]
      </Typography>
      </Box>
      </Grid>

      <Grid item xs={4}>
      <Box sx={{
        border: 1,
        p:1,
        height: 50,
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
      }, }}>
   
      </Box>
      </Grid>
      </Grid>
    </Box>
  
    
    </>
      );
  };
  
  export default Onboarding;
  