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
import AccountSettings from './pages/AccountSettings';
import Onboarding from './pages/Onboarding';
import AdvisorIndex from './components/advisor/AdvisorIndex';
import MentorIndex from './components/mentor/MentorIndex';
import OnboardingIndex from './components/Onboarding/OnboardingIndex';
import EmailSent from './components/EmailSent';
import { useSelector, useDispatch } from 'react-redux';
import { getAppAlertIsOpen, getAppAlert, getAppAlertSeverity} from './redux/app/app.selectors';
import { getUserDetail } from './redux/user/user.actions';
import { closeAppAlert, setAppToken } from './redux/app/app.actions';
import { AppState } from './redux/rootReducer'
import * as actions from './redux/actions';
import jwt_decode from "jwt-decode";

export type AlertColor = 'success' | 'error' | 'warning' | 'info';

interface Props {
  children: React.ReactNode;
  redirectPath?: string;
  isAllowed?: boolean;
}

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const appState = useSelector((store: AppState) => store.appState);

  const tokenCookie = localStorage.getItem('token')
  const refreshCookie = localStorage.getItem('refresh_token')

  const now = new Date()

  if(tokenCookie !== null && refreshCookie !== null){
      let now = new Date();
      var decoded_refresh:any = jwt_decode(tokenCookie);
      var expires_at:any = decoded_refresh.exp
      let expiresAt = new Date(parseInt(expires_at)*1000);
      if(now > expiresAt){
        return <Navigate to="/login" state={{ from: location }} />;
      }
  }else{
    if (!appState.isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
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

  React.useEffect(() => {

    const userCookie = localStorage.getItem('user')
    const tokenCookie = localStorage.getItem('token')
    const refreshCookie = localStorage.getItem('refresh_token')

    const now = new Date()

    if(tokenCookie !== null && refreshCookie !== null){
        let now = new Date();

        var decoded_refresh:any = jwt_decode(tokenCookie);
        var expires_at:any = decoded_refresh.exp
        let expiresAt = new Date(parseInt(expires_at)*1000);

        if(now > expiresAt){
          setTimeout(() => dispatch(actions.logout()), 100);
        }else{
          setTimeout(() => dispatch(setAppToken({access_token:tokenCookie, refresh_token:refreshCookie})), 0);
          dispatch(getUserDetail())
        }
    }

  },[])


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
        <Route path="/account" element={<PrivateRoute><AccountSettings /></PrivateRoute>} />
        <Route path="/account" element={<PrivateRoute><AccountSettings /></PrivateRoute>} />
        <Route path="/advisor/*" element={<AdvisorIndex />} />
        <Route path="/onboarding/*" element={<PrivateRoute><Onboarding /></PrivateRoute>} />
        <Route path="/mentor/*" element={<MentorIndex />} />
        <Route path="/mentor/onboarding/*" element={<OnboardingIndex />} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}
export default App;
