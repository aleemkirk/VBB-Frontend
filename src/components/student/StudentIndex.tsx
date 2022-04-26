import { Box } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes } from 'react-router-dom';
import StudentHome from './StudentHome';
import StudentBooking from './StudentBooking';

const menuItems = [
  { label: 'Home', url: '/student' },
  { label: 'Booking', url: '/student/booking' },
];

const StudentIndex = () => {
  return (
    <Box maxWidth={1024} mx="auto" mt={6} display="flex" p={2}>
      <Box minWidth={200} flexShrink="0">
        <SideNav menuItems={menuItems} />
      </Box>
      <Box flex="1 1 auto">
        <Routes>
          <Route index element={<StudentHome />} />
          <Route path="booking" element={<StudentBooking />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default StudentIndex;