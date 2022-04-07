import { Box, Tab, Tabs } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


const menuItems = [
    { label: 'Home', url: '/librarian' },
    { label: 'Announcements', url: '/librarian/announcements' },
    { label: 'Students', url: '/librarian/students' },
    { label: 'Mentors', url: '/librarian/mentors' },
  ];


const Librarian = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return(
    <Box maxWidth={1024} mx="auto" mt={6} display="flex" p={2}>
      <Box minWidth={200} flexShrink="0">
        <SideNav menuItems={menuItems} />
      </Box>
      <Box flex="1 1 auto">
        <Routes>
          <Route index element={<Box>Librarian Home</Box>} />
          <Route path="announcements" element={<Box>Announcements</Box>} />
          <Route path="students" element={<Box>List of Student </Box>} />
          <Route path="mentors" element={<Box>List of mentors</Box>} />
        </Routes>
      </Box>
    </Box>
    );

};


export default Librarian;