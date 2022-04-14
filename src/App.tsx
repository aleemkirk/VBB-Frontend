import { Box, GlobalStyles } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Scheduler from './components/Scheduler';

import Onboarding from './components/Mentor/Onboarding/Onboarding';
import OnboardingTrain from './components/Mentor/Onboarding/OnboardingTrain';
import OnboardingDona from './components/Mentor/Onboarding/OnboardingDona';
import OnboardingProf from './components/Mentor/Onboarding/OnboardingProf';
import OnboardingAppr from './components/Mentor/Onboarding/OnboardingAppr';
import OnboardingComm from './components/Mentor/Onboarding/OnboardingComm';
import OnboardingCongra from './components/Mentor/Onboarding/OnboardingCongra';

import MenteeBooking from './components/Mentee/MenteeBooking';

import Profile from './components/Mentor/Profile/Profile';

const App = () => (
  <>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <Header />
    <Box pt="64px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scheduler" element={<Scheduler />} />
        
        <Route path = "/mentor/onboarding" element={<Onboarding/>}/>
        <Route path="/mentor/onboardingTrain" element={<OnboardingTrain/>}/>
        <Route path="/mentor/onboardingDona" element={<OnboardingDona/>}/>
        <Route path="/mentor/onboardingProf" element={<OnboardingProf/>}/>
        <Route path="/mentor/onboardingAppr" element={<OnboardingAppr/>}/>
        <Route path="/mentor/onboardingComm" element={<OnboardingComm/>}/>
        <Route path="/mentor/onboardingCongra" element={<OnboardingCongra/>}/>

        <Route path="/mentor/profile" element={<Profile/>}/>

        <Route path="/mentee/booking" element={<MenteeBooking/>}/>
      </Routes>
    </Box>
  </>
);

export default App;
