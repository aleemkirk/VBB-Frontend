import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AdvisorHome = () => (
  <Grid container padding={2}>
    <Grid item xs={12} pb={2}>
      <Typography variant="h4">Hello (name)!</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4">Program/Library</Typography>
    </Grid>
    <Grid item xs={12}>
      <Card sx={{ p: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Link to="/advisor/program">AA Program</Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/advisor/program">BB Program</Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/advisor/program">CC Program</Link>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  </Grid>
);

export default AdvisorHome;
