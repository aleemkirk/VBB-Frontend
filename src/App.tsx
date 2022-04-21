import { Box, GlobalStyles } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LibrarianIndex from './components/librarian/LibrarianIndex';

import Onboarding from './components/Mentor/Onboarding/Onboarding';


import MenteeHome from './components/Mentee/MenteeHome';
import MenteeBooking from'./components/Mentee/MenteeBooking';

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
        <Route path="/mentee/home" element={<MenteeHome/>}/>
        <Route path="/mentee/booking" element={<MenteeBooking/>}/>
        <Route path="/librarian/*" element={<LibrarianIndex />} />

      </Routes>
    </Box>
  </>
);

export default App;
