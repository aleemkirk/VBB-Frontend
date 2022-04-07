import MentorHeader from '../MentorHeader'; 
import { Button, Grid, Paper, TextField, Typography, Box, Container, styled, Card, CardContent} from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 500,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const OnboardingDonation = () => {
    return (
        <>
      <MentorHeader/>
      
      <Box sx={{ width: '100%' }}>
      <Item>
      <Grid container justifyContent="space-evenly" >
        
      <Card variant="outlined" sx={{ 
        width: 1000, 
        minHeigth: 700,
        mt: 10 }}>
      <CardContent>
        <Typography variant="h4">
        Congratulation!
        </Typography>
        <Box sx={{ 
          width: '100%',
          height: 150 }}>

        </Box>
        </CardContent>
      </Card>

      <Grid container 
      justifyContent="flex-end"
      sx={{
             width: 500,
             ml: 23,
             mt:10,
        }}>
    <Grid item xs={6}>
      <Button component={Link} to="/">
      START 
    </Button>
    </Grid>
    </Grid>
   
    </Grid>
    </Item>
    </Box>
    </>
      );
  };
  
  export default OnboardingDonation ;
  