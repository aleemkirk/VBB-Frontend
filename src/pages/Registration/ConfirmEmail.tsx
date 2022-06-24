import * as React from 'react';
import { Button, Paper, Typography, CircularProgress  } from '@mui/material';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import RegisterMenteeForm from './RegisterStudentForm';
import MentorSignUpForm from './MentorSignUpForm';
import { PageLayout } from '../../components/layout/Page';
import scss_variables from '../../styles/_variables.scss';
import { verifyMentorEmail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';

const ConfirmEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || null;
  const [loading, setLoading] = React.useState(false);
  const [verified, setVerified] = React.useState(false);

  const appState = useSelector((store: AppState) => store.appState);


  React.useEffect(() => {
    if (token !== undefined && token !== null) {
      //setLoading(true)
      dispatch(verifyMentorEmail({token:token}));
    }
  }, []);


  React.useEffect(() => {
    if (appState !== undefined && appState !== null) {
      console.log(appState)
      if (appState.loading) {
        setLoading(appState.loading)
      }
      if (appState.verify_success) {
        setVerified(true)
        setTimeout(()=>{navigate('/login');},3000)

      }
    }
  }, [appState]);



  return (
    <PageLayout>
    <Paper
      sx={{ pr: 3, mt: 10, maxWidth: '720px', mx: 'auto', display: 'flex' }}
      elevation={0}
      variant="outlined"
      square
    >
      <Paper
        sx={{
          p: 3,
          flexGrow: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        elevation={0}
      >
        {appState.loading === true
        ? (
          <div>
            <Typography mt={3} mb={3} variant="body1" alignSelf="flex-end" color={scss_variables.primary_color}>
              Verifying Your Email Address...
            </Typography>
            <CircularProgress />
          </div>
        )
        : (<>
          {verified
          ? (
            <div>
              <Typography mt={3} mb={3} variant="body1" alignSelf="flex-end" color={scss_variables.primary_color}>
                Email Verified Successfully! Redirecting Back To Login...
              </Typography>
            </div>
          )
          : (
            <div>
              <Typography mt={3} mb={3} variant="body1" alignSelf="flex-end" color={scss_variables.primary_color}>
                Could not verify email address with the token provided...
              </Typography>
            </div>
          )}

          </>
        )}

        <div>
          <Typography mt={3} variant="body1" alignSelf="flex-end" color={scss_variables.primary_color}>
            Already have an account?
          </Typography>
          <Button component={Link} to="/login">
            Login
          </Button>
        </div>
      </Paper>
    </Paper>
    </PageLayout>
  );
};

export default ConfirmEmail;
