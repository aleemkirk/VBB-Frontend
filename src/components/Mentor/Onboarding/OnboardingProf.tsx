import MentorHeader from '../MentorHeader'; 
import { Checkbox, FormControlLabel, FormGroup, Button, Grid, Paper, TextField, Typography, Box, Container, styled, } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 500,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const OnboardingProf = () => {
    return (
        <>
      <MentorHeader/>

      <Grid container >
      <Grid item xs={8} >
      <Item>

      <Typography variant="h4">Complete Your Profile</Typography>
      
      <Box sx={{
        width: 300,
        ml: 23,
        mt:10,
        mb:10,
      }}>
      <FormGroup>
      <FormControlLabel control={<Checkbox />}  label="Profile Setting:" />
      <FormControlLabel control={<Checkbox />}  label="Mentoring Information:" />
      </FormGroup>
      </Box>

      <Grid container sx={{
             width: 500,
             ml: 23,
             mt:10,
        }}>
      <Grid item xs={6}>
      <Button component={Link} to="/mentor/onboardingDona">
      <ArrowCircleLeftIcon/>PERVIOUS
    </Button>
    </Grid>
    <Grid item xs={6}>
    <Button component={Link} to="/mentor/onboardingAppr">
      NEXT STEP<ArrowCircleRightIcon/>
    </Button>
    </Grid>
    </Grid>
    </Item>
    </Grid>

 
    <Grid item xs={4}>
    <Item>
      <p><FiberManualRecordOutlinedIcon/><FiberManualRecordOutlinedIcon/><FiberManualRecordIcon/><FiberManualRecordOutlinedIcon/><FiberManualRecordOutlinedIcon/></p>
    <Typography variant="h3">Profile</Typography>
    </Item>
    </Grid>

  </Grid>
    </>
      );
  };
  
  export default OnboardingProf ;
  