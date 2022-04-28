import { Box } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes } from 'react-router-dom';
import AdvisorProgram from './AdvisorProgram';
import AdvisorHome from './AdvisorHome';

const menuItems = [
  { label: 'Home', url: '/advisor' },
  { label: 'Program', url: '/advisor/program' },
  { label: 'Timeslot/meetings', url: '/advisor/timeslots' },
  { label: 'Attendance', url: '/advisor/attendance' },
  { label: 'Prospective Mentors', url: '/advisor/prospects' },
  { label: 'Mentors/Students', url: '/advisor/mentors' },
];

const AdvisorIndex = () => {
  return (
    <Box maxWidth={1024} mx="auto" mt={6} display="flex" p={2}>
      <Box minWidth={200} flexShrink="0">
        <SideNav menuItems={menuItems} />
      </Box>
      <Box flex="1 1 auto">
        <Routes>
          <Route index element={<AdvisorHome />} />
          <Route path="program/*" element={<AdvisorProgram />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdvisorIndex;
