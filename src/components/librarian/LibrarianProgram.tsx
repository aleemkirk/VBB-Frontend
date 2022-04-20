import { Tab, Tabs } from '@mui/material';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LibrarianCalendar from './LibrarianCalendar';
import LibrarianComputers from './LibrarianComputers';

const LibrarianProgram = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Tabs
        value={pathname}
        sx={{ borderBottom: 1, borderColor: 'divider', mb: 1 }}
      >
        <Tab
          value="/librarian/program"
          label="Calendar"
          onClick={() => navigate('/librarian/program')}
        />
        <Tab
          value="/librarian/program/computers"
          label="Computers"
          onClick={() => navigate('/librarian/program/computers')}
        />
      </Tabs>
      <Routes>
        <Route index element={<LibrarianCalendar />} />
        <Route path="computers" element={<LibrarianComputers />} />
      </Routes>
    </>
  );
};

export default LibrarianProgram;
