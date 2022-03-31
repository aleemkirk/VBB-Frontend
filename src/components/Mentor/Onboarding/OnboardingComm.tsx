import MentorHeader from '../MentorHeader'; 
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const OnboardingDonation = () => {
    return (
        <>
      <MentorHeader/>
      <Grid item xs={12}>
          <Typography variant="h4">Communication</Typography>
      </Grid>

      <Grid>
      <Button component={Link} to="/mentor/onboardingAppr">
      <ArrowCircleLeftIcon/>PERVIOUS 
    </Button>
    </Grid>
      <Grid>
      <Button component={Link} to="/mentor/onboardingCongra">
      NEXT <ArrowCircleRightIcon/>
    </Button>
    </Grid>
    </>
      );
  };
  
  export default OnboardingDonation ;
  