import * as React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../redux/rootReducer';
import { PageLayout, MainCardLayout } from '../components/layout/Page';
import scss_variables from '../styles/_variables.scss';
import { useDispatch, useSelector } from 'react-redux';

const NotFound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appState = useSelector((store: AppState) => store.appState);
  const user = useSelector((store: AppState) => store.user);

  React.useEffect(() => {}, []);

  return (
    <PageLayout>
      <MainCardLayout>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="card-container">
              <div className="card-header">
                <Typography
                  variant="h6"
                  alignSelf="flex-start"
                  color={scss_variables.primary_color}
                >
                  Page Not Found
                </Typography>
              </div>
              <div className="card-body">
                <Box display="flex" alignItems="center">
                  <Typography
                    mt={1}
                    mb={1}
                    variant="body1"
                    alignSelf="flex-start"
                    color={scss_variables.primary_color}
                  >
                    We couldn't find the page you were looking for....
                  </Typography>
                  <span role="img" aria-label="Crying Face">
                    😢
                  </span>
                </Box>
                <Link to={process.env.PUBLIC_URL + '/'}>
                  Return to Home Page
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </MainCardLayout>
    </PageLayout>
  );
};
export default NotFound;
