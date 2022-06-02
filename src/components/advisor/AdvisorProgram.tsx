import { Tabs, Tab, MenuItem, Select, Grid } from '@mui/material';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AdvisorCalendar from './AdvisorCalendar';
import AdvisorComputers from './AdvisorComputers';

const fakePrograms = [
  'AA Library / AA Program 1',
  'BB Library / BB Program 2',
  'CC Library / CC Program 3',
];

const AdvisorProgram = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={1} padding={2}>
        <Grid item xs={12}>
          <Tabs
            value={pathname}
            sx={{ borderBottom: 1, borderColor: 'divider', mb: 1 }}
          >
            <Tab
              value="/advisor/program"
              label="Calendar"
              onClick={() => navigate('/advisor/program')}
            />
            <Tab
              value="/advisor/program/computers"
              label="Computers"
              onClick={() => navigate('/advisor/program/computers')}
            />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <Select size="small" defaultValue={fakePrograms[0]}>
            {fakePrograms.map((program) => (
              <MenuItem key={program} value={program}>{program}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>

      <Routes>
        <Route index element={<AdvisorCalendar />} />
        <Route path="computers" element={<AdvisorComputers />} />
      </Routes>
    </>
  );
};

export default AdvisorProgram;
