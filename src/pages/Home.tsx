import * as React from 'react';
import { Grid, Typography, Box, Button, Alert} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../redux/rootReducer'
import { getUserDetail } from '../redux/user/user.actions'
import { PageLayout, MainCardLayoutWithSideMenu} from '../components/layout/Page';
import scss_variables from '../styles/_variables.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BasicModal } from '../components/Modals';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const appState = useSelector((store: AppState) => store.appState);
    const user = useSelector((store: AppState) => store.user);
    const [onboardingModalOpen, set_onboardingModalOpen] = React.useState(false);

    React.useEffect(() => {

    }, []);


    React.useEffect(() => {
      if (user !== undefined && user !== null) {
        if (user.mentorProfile === null && user.studentProfile === null) {
          set_onboardingModalOpen(true)
        }

        if (user.studentProfile && user.studentProfile.isOnboarded === false) {
          set_onboardingModalOpen(true)
        }
      }
    }, [user]);


    return(<>
    <BasicModal open={onboardingModalOpen} onClose={()=>set_onboardingModalOpen(false)} title={'Welcome To Village Book Builders'}>
      <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
        <b>Thanks for signing up. Let's finish your profile setup by completing a quick form.</b>
      </Typography>
      <Button component={Link} to='/onboarding' variant="contained" color="info" sx={{mt:2}}>
        Finish Onboarding
      </Button>
    </BasicModal>
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

          {user.mentorProfile && user.mentorProfile.approvalStatus === "Not Reviewed"
          ? <Alert severity="info" sx={{mt:3}}>Your Mentor Application Is Currently Under Review! You won't be able to book a session until that has been approved.</Alert>
          : null }

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
  </>);
}
export default Home;
