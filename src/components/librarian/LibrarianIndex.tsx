import { Box } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes } from 'react-router-dom';
import LibrarianProgram from './LibrarianProgram';

const menuItems = [
  { label: 'Home', url: '/librarian' },
  { label: 'Program', url: '/librarian/program' },
  { label: 'Timeslot/meetings', url: '/librarian/timeslots' },
  { label: 'Attendance', url: '/librarian/attendance' },
  { label: 'Prospective Mentors', url: '/librarian/prospects' },
  { label: 'Mentors/Students', url: '/librarian/mentors' },
];

const LibrarianIndex = () => {
  return (
    <Box maxWidth={1024} mx="auto" mt={6} display="flex" p={2}>
      <Box minWidth={200} flexShrink="0">
        <SideNav menuItems={menuItems} />
      </Box>
      <Box flex="1 1 auto">
        <Routes>
          <Route path="program/*" element={<LibrarianProgram />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default LibrarianIndex;
