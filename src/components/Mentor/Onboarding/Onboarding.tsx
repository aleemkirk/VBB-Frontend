import MentorHeader from '../MentorHeader'; 
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Onboarding = () => {
    return (
        <>
      <MentorHeader/>

      <Grid item xs={12}>
          <Typography variant="h4">Training</Typography>
      </Grid>

      <Grid>
      <Button component={Link} to="/mentor/onboardingDona">
      NEXT<ArrowCircleRightIcon/>
    </Button>
    </Grid>
    </>
      );
  };
  
  export default Onboarding;
  