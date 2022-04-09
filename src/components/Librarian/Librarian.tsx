import { Box, Tab, Tabs } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import StudentList from './StudentList';
import MentorList from './MentorList';
import AnnouncementList from './AnnouncementList';


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
      <Box flex="1 1 auto" maxWidth={800} maxHeight={800} overflow='auto'>
        <Routes>
          <Route index element={<Box>Librarian Home</Box>} />
          <Route path="announcements" element={<AnnouncementList/>} />
          <Route path="students" element={<StudentList/>} />
          <Route path="mentors" element={<MentorList/>} />
        </Routes>
      </Box>
    </Box>
    );

};


export default Librarian;