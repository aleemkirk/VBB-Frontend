import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => (
  <Grid container padding={3} spacing={3} mt={3}>
    <Grid item xs={12}>
      <Link to="/register">Register Mentor</Link>
    </Grid>
    <Grid item xs={12}>
      <Link to="/register?type=mentee">Register Mentee</Link>
    </Grid>
    <Grid item xs={12}>
      <Link to="/program">Scheduler</Link>
    </Grid>
    <Grid item xs={12}>
      <Link to="/librarian">Librarian</Link>
    </Grid>
  </Grid>
);

export default Home;
