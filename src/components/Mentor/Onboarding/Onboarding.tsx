import MentorHeader from '../MentorHeader'; 
import { Checkbox, FormControlLabel, FormGroup, Button, Grid, Paper, TextField, Typography, Box, Container, styled, } from '@mui/material';
import { Link } from 'react-router-dom';
// import{ ArrowCircleRightIcon, FiberManualRecordIcon, FiberManualRecordOutlinedIcon } from '@mui/icons-material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 500,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Onboarding = () => {
    return (
        <>
      <MentorHeader/>

  <Grid container >
      <Grid item xs={8} >
      <Item>

      <Typography variant="h4">View mentor training resources</Typography>
      
      <Box sx={{
        width: 300,
        ml: 23,
        mt:10,
        mb:10,
      }}>
      <FormGroup>
      <FormControlLabel control={<Checkbox />}  label="Google Doc:" />
      <FormControlLabel control={<Checkbox  />} label="Notion:" />
      </FormGroup>
      </Box>

      <Grid container 
      justifyContent="flex-end"
      sx={{
             width: 500,
             ml: 23,
             mt:10,
        }}>
    <Grid item xs={6}>
      <Button component={Link} to="/mentor/onboardingDona">
      NEXT STEP<ArrowCircleRightIcon/>
    </Button>
    </Grid>
    </Grid>

    </Item>
    </Grid>

 
    <Grid item xs={4}>
    <Item>
      <p><FiberManualRecordIcon/><FiberManualRecordOutlinedIcon/><FiberManualRecordOutlinedIcon/><FiberManualRecordOutlinedIcon/><FiberManualRecordOutlinedIcon/></p>
    <Typography variant="h3">Training</Typography>
    </Item>
    </Grid>

  </Grid>
    
    </>
      );
  };
  
  export default Onboarding;
  