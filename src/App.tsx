import { Box, GlobalStyles } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdvisorIndex from './components/advisor/AdvisorIndex';
import RegisterMentorForm from './components/CompleteMentorRegistrationForm';

import Onboarding from './components/Mentor/Onboarding/Onboarding';
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
        
        <Route path = "/mentor/onboarding" element={<Onboarding/>}/>
        <Route path="/mentor/profile" element={<Profile/>}/>

        <Route path="/advisor/*" element={<AdvisorIndex />} />
      </Routes>
    </Box>
  </>
);

export default App;
