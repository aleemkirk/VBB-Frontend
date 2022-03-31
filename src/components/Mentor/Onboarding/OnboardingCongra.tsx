import MentorHeader from '../MentorHeader'; 
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const OnboardingDonation = () => {
    return (
        <>
        <Grid item xs={12}>
          <Typography variant="h4">Congratulation</Typography>
      </Grid>

      <MentorHeader/>
   
      <Grid>
      <Button component={Link} to="/">
      START 
    </Button>
    </Grid>
    </>
      );
  };
  
  export default OnboardingDonation ;
  