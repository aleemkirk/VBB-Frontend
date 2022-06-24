import * as React from 'react';
import { AppBar, Avatar, Box, Button, Toolbar, Typography, Menu, ListItemIcon, IconButton, MenuItem} from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import { AppState } from '../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const flexContainerStyles = {
  maxWidth: '200px',
  flex: '1 1 auto',
};

const SideMenu = () => {
  const navigate = useNavigate();
  const appState = useSelector((store: AppState) => store.appState);
  const user = useSelector((store: AppState) => store.user);

  return (
    <div className="card-container">
      <Grid container padding={3} spacing={3}>
        <Grid item xs={12}>
          <Link to="/register">Register Mentor</Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/register?type=mentee">Register Mentee</Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/complete-registration">Complete Mentor Registration</Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/advisor">Advisor Index</Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/mentor">Mentor Index</Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/mentor/onboarding">Mentor Onboarding</Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/email-sent">Email Sent</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideMenu;
