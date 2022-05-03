import { Box } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes } from 'react-router-dom';
import MentorHome from './MentorHome';
import MentorBooking from './MentorBooking';
import MentorSession from './MentorSessions';
import MentorMessage from './MentorMessage';

const menuItems = [
    { label: 'Home', url: '/mentor' },
    { label: 'Booking', url: '/mentor/booking' },
    { label: 'My Sessions', url: '/mentor/session' },
    { label: 'Messages', url: '/mentor/message' },
  ];
  

const MentorIndex = () => {

    return(
        <Box maxWidth={1024} mx="auto" mt={6} display="flex" p={2}>
        <Box minWidth={200} flexShrink="0">
            <SideNav menuItems={menuItems} />
        </Box>
        <Box flex="1 1 auto">
            <Routes>
                <Route index element={<MentorHome />} />
                <Route path="booking" element={<MentorBooking />} />
                <Route path="session" element={<MentorSession />} />
                <Route path="message" element={<MentorMessage />} />
            </Routes>
      </Box>
    </Box>
    );
};


export default MentorIndex;