import * as React from 'react';
import { Grid, Typography, Box, Button, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../../redux/rootReducer';
import {
  StudentOnboardingForm,
  MentorOnboardingForm,
} from '../../redux/registration/registration.types';

import { PageLayout, MainCardLayout } from '../../components/layout/Page';
import scss_variables from '../../styles/_variables.scss';
import { useDispatch, useSelector } from 'react-redux';
import MentorOnboardForm from './MentorOnboardForm';
import StudentOnboardForm from './StudentOnboardForm';
import { BasicModal } from '../../components/Modals';
import {
  completeMentorOnboard,
  completeStudentOnboard,
} from '../../redux/registration/registration.actions';
import { renderAPIMsg } from '../../utils/api';

export interface OnboardProps {
  handleSubmit: any;
}

const Onboarding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appState = useSelector((store: AppState) => store.appState);
  const user = useSelector((store: AppState) => store.user);
  const taskState = useSelector((state: AppState) => state.addTaskNo);
  const stepState = useSelector((state: AppState) => state.onboardingSteps);

  const [onboardingSubmitOpen, set_onboardingSubmitOpen] =
    React.useState(false);

  React.useEffect(() => {}, []);

  function handleStudentOnboardSubmit(e: any, formData: StudentOnboardingForm) {
    set_onboardingSubmitOpen(true);
    dispatch(completeStudentOnboard(formData));
  }

  function handleMentorOnboardSubmit(e: any, formData: MentorOnboardingForm) {
    set_onboardingSubmitOpen(true);
    dispatch(completeMentorOnboard(formData));
  }

  return (
    <>
      <BasicModal
        open={onboardingSubmitOpen}
        onClose={() => set_onboardingSubmitOpen(false)}
        title={'Completing Your Profile...'}
      >
        {appState.loading ? (
          <CircularProgress />
        ) : (
          <>
            {appState.error === null ? (
              <>
                <Typography
                  mt={1}
                  mb={1}
                  variant="body1"
                  alignSelf="flex-start"
                  color={scss_variables.primary_color}
                >
                  <b>{renderAPIMsg(appState.payload)}</b>
                </Typography>
                <Button
                  component={Link}
                  to="/?onboard_complete=true"
                  variant="contained"
                  color="info"
                  sx={{ mt: 2 }}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <Typography
                  mt={1}
                  mb={1}
                  variant="body1"
                  alignSelf="flex-start"
                  color={scss_variables.primary_color}
                >
                  <b>{renderAPIMsg(appState.error)}</b>
                </Typography>
                <Button
                  onClick={() => set_onboardingSubmitOpen(false)}
                  variant="contained"
                  color="info"
                  sx={{ mt: 2 }}
                >
                  Re-enter Info
                </Button>
              </>
            )}
          </>
        )}
      </BasicModal>
      <PageLayout>
        <MainCardLayout>
          <Grid container spacing={3} justifyContent={'center'}>
            <Grid item xs={12} sm={8}>
              <div className="card-container">
                <div className="card-header">
                  <Typography
                    variant="h6"
                    alignSelf="flex-start"
                    color={scss_variables.primary_color}
                  >
                    Onboarding
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
                      To finish setting up your account, please follow this
                      simple questionaire to customize your experience.
                    </Typography>
                  </Box>
                  <Typography
                    mt={1}
                    mb={1}
                    variant="h6"
                    alignSelf="flex-start"
                    color={scss_variables.primary_color}
                  >
                    Complete Your{' '}
                    {user.isMentor === true ? 'Mentor' : 'Student'} Profile
                  </Typography>

                  {user.isMentor === true ? (
                    <MentorOnboardForm
                      handleSubmit={handleMentorOnboardSubmit}
                    />
                  ) : (
                    <StudentOnboardForm
                      handleSubmit={handleStudentOnboardSubmit}
                    />
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </MainCardLayout>
      </PageLayout>
    </>
  );
};
export default Onboarding;
