import { Tab, Tabs } from '@mui/material';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MenteeCalendar from './MenteeBooking';

const MenteeRoute = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Tabs
        value={pathname}
        sx={{ borderBottom: 1, borderColor: 'divider', mb: 1 }}
      >
    
      </Tabs>
      <Routes>
        <Route index element={<MenteeCalendar />} />
        {/* <Route path="computers" element={<LibrarianComputers />} /> */}
      </Routes>
    </>
  );
};

export default MenteeRoute;
