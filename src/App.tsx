import * as React from 'react';
import { Box, GlobalStyles, Snackbar, Alert } from '@mui/material';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login/';
import NotFound from './pages/NotFound';
import Register from './pages/Registration/Register';
import ConfirmEmail from './pages/Registration/ConfirmEmail';
import Bookings from './pages/Bookings';
import AdvisorIndex from './components/advisor/AdvisorIndex';
import MentorIndex from './components/mentor/MentorIndex';
import RegisterMentorForm from './components/CompleteMentorRegistrationForm';
import OnboardingIndex from './components/Onboarding/OnboardingIndex';
import EmailSent from './components/EmailSent';
import { useSelector, useDispatch } from 'react-redux';
import { getAppAlertIsOpen, getAppAlert, getAppAlertSeverity} from './redux/app/app.selectors';
import { closeAppAlert } from './redux/app/app.actions';
import { AppState } from './redux/rootReducer'

export type AlertColor = 'success' | 'error' | 'warning' | 'info';

interface Props {
  children: React.ReactNode;
  redirectPath?: string;
  isAllowed?: boolean;
}

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const appState = useSelector((store: AppState) => store.appState);

  if (!appState.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};


function App(){
  const dispatch = useDispatch();
  const isAlertOpen = useSelector(getAppAlertIsOpen)
  const alertMsg = useSelector(getAppAlert)
  const alertSeverity = useSelector(getAppAlertSeverity)
  const appState = useSelector((store: AppState) => store.appState);

  React.useEffect(() => {
    console.log(isAlertOpen)
  }, [isAlertOpen]);

  function handleCloseAlert(e: any) {
    setTimeout(() => dispatch(closeAppAlert()), 0);
  }

  return(
    <>
      <GlobalStyles styles={{ body: { margin: 0 } }} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isAlertOpen}
        autoHideDuration={10000}
        onClose={handleCloseAlert}
        >
        <Alert
          onClose={handleCloseAlert}
          severity={alertSeverity}
          sx={{
            width: '100%',
            fontSize: 18,
            alignItems: 'center',
            borderRadius: '25px',
          }}
        >
          {alertMsg}
      </Alert>
      </Snackbar>
      <Routes>

        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/confirm" element={<ConfirmEmail />} />
        <Route path="/bookings" element={<PrivateRoute><Bookings /></PrivateRoute>} />
        <Route path="/complete-registration" element={<RegisterMentorForm />} />
        <Route path="/advisor/*" element={<AdvisorIndex />} />
        <Route path="/mentor/onboarding/*" element={<OnboardingIndex />} />
        <Route path="/mentor/*" element={<MentorIndex />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}
export default App;
