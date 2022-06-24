import * as React from 'react';
import { Grid, Typography, Box, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../redux/rootReducer'
import { PageLayout, MainCardLayoutWithSideMenu} from '../components/layout/Page';
import scss_variables from '../styles/_variables.scss';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const appState = useSelector((store: AppState) => store.appState);
    const user = useSelector((store: AppState) => store.user);

    React.useEffect(() => {

    }, []);


    return(
    <PageLayout>
      <MainCardLayoutWithSideMenu>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className="card-container">
                <div className="card-header">
                <Typography variant="h6" alignSelf="flex-start" color={scss_variables.primary_color}>
                  Resource Center
                </Typography>
                </div>
                <div className="card-body">
                  <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
                    <b>Getting started with Village Book Builders is easy!</b>
                  </Typography>
                  <Box display="flex" flexDirection="column" pb={1}>
                    <Link to="#">Free Books</Link>
                    <Link to="#">Free Onlne Article Sources</Link>
                    <Link to="#">Free Guides / Worksheets</Link>
                    <Link to="#">Village Portal FAQs</Link>
                    <Link to="#">Show Me A Tour</Link>
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="card-container">
                <div className="card-header">
                  <Typography variant="h6" alignSelf="flex-start" color={scss_variables.primary_color}>
                    Activity & Announcements
                  </Typography>
                  <Link to="#">View All</Link>
                </div>
                <div className="card-body">
                  <Box display="flex" flexDirection="column">
                    <Typography variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
                      No announcements today...
                    </Typography>
                  </Box>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={3} mt={1}>
            <Grid item xs={12}>
              <div className="card-container">
                <div className="card-header">
                  <Typography variant="h6" alignSelf="flex-start" color={scss_variables.primary_color}>
                    Upcoming Mentor Sessions
                  </Typography>
                  <Link to="/sessions">View All Sessions</Link>
                </div>
                <div className="card-body">
                  <Box display="flex" flexDirection="column">
                    <Typography variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
                      You have no mentor sessions yet...
                    </Typography>
                  </Box>
                  <Button component={Link} to='/bookings' variant="contained" color="info" sx={{mt:2}}>
                    Find New Sessions
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>

      </MainCardLayoutWithSideMenu>
    </PageLayout>
  );
}
export default Home;
