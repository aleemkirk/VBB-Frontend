import { Box, Tab, Tabs } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LibrarianCalendar from './LibrarianCalendar';

const menuItems = [
  { label: 'Home', url: '/' },
  { label: 'Program', url: '/program' },
  { label: 'Timeslot/meetings', url: '/librarian/timeslots' },
  { label: 'Attendance', url: '/librarian/attendance' },
  { label: 'Prospective Mentors', url: '/librarian/prospects' },
  { label: 'Mentors/Students', url: '/librarian/mentors' },
];

const Scheduler = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Box maxWidth={1024} mx="auto" mt={6} display="flex" p={2}>
      <Box minWidth={200} flexShrink="0">
        <SideNav menuItems={menuItems} />
      </Box>
      <Box flex="1 1 auto">
        <Tabs
          value={pathname}
          sx={{ borderBottom: 1, borderColor: 'divider', mb: 1 }}
        >
          <Tab
            value="/program"
            label="Calendar"
            onClick={() => navigate('/program')}
          />
          <Tab
            value="/program/computers"
            label="Computers"
            onClick={() => navigate('/program/computers')}
          />
        </Tabs>
        <Routes>
          <Route index element={<LibrarianCalendar />} />
          <Route path="computers" element={<Box>Computers</Box>} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Scheduler;
