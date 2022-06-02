import { Badge, Grid, IconButton } from '@mui/material';
import {
  Add,
  Computer as ComputerIcon,
  ComputerTwoTone,
} from '@mui/icons-material';
import Computer from './Computer';
import { Box } from '@mui/system';
import SimpleModal from '../shared/SimpleModal';
import { useState } from 'react';

const fakeComputers = ['Computer 1', 'Computer 2', 'Computer 3'];

const AdvisorComputers = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);

  return (
    <Grid container padding={2} spacing={1}>
      <Grid item xs={12} display="flex" alignItems="center">
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
        <Grid item xs={12} key={computer}>
          <Computer
            computer={computer}
            onDelete={() => setDeleteId(computer)}
          />
        </Grid>
      ))}
      <SimpleModal
        open={Boolean(deleteId)}
        onClose={() => setDeleteId(null)}
        onSubmit={() => console.log('delete computer')}
        title={`Are you sure you want to delete ${deleteId} from program?`}
      />
    </Grid>
  );
};

export default AdvisorComputers;
