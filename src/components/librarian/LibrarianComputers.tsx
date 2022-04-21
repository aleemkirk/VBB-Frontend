import { Badge, Grid, IconButton, MenuItem, Select } from '@mui/material';
import {
  Add,
  Computer as ComputerIcon,
  ComputerTwoTone,
} from '@mui/icons-material';
import Computer from './Computer';
import { Box } from '@mui/system';

const fakePrograms = [
  'AA Library / AA Program 1',
  'BB Library / BB Program 2',
  'CC Library / CC Program 3',
];
const fakeComputers = ['Computer 1', 'Computer 2', 'Computer 3'];

const LibrarianComputers = () => {
  return (
    <Grid container padding={2} spacing={1}>
      <Grid item xs={12} display="flex" alignItems="center">
        <Select size="small" defaultValue={fakePrograms[0]}>
          {fakePrograms.map((program) => (
            <MenuItem value={program}>{program}</MenuItem>
          ))}
        </Select>
        <Box display="flex" ml={2} alignItems="center" mr="auto">
          <Badge badgeContent={3} color="info">
            <ComputerIcon />
          </Badge>
          <Badge badgeContent={2} color="warning" sx={{ ml: 2 }}>
            <ComputerTwoTone />
          </Badge>
        </Box>
        <IconButton>
          <Add />
        </IconButton>
      </Grid>
      {fakeComputers.map((computer) => (
        <Grid item xs={12}>
          <Computer computer={computer} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LibrarianComputers;
