import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { SlotInfo } from 'react-big-calendar';
import Modal from './Modal';
import { CalendarEvent, isCalendarEvent } from '../../utils/CalendarEvent';
import {
  AccessTime,
  Computer,
  Email,
  Notes,
  Person,
  PersonAdd,
  PhotoCameraFront,
} from '@mui/icons-material';
import { SlotSessions } from '../student/StudentBooking';

interface EventModalProps {
  eventOrSlot: CalendarEvent | SlotInfo | null | SlotSessions;
  onClose: () => void;
}

const fakeStudents = ['Student 1', 'Student 2', 'Student 3'];
const fakeMentors = ['Mentor 1', 'Mentor 2', 'Mentor 3'];

const EventModal = ({ eventOrSlot, onClose }: EventModalProps) => {
  const isEvent = isCalendarEvent(eventOrSlot);
  return (
    <Modal
      open={Boolean(eventOrSlot)}
      onClose={onClose}
      // @ts-ignore
      title={
        <Box display="flex" alignItems="center">
          <Computer sx={{ mr: 2 }} /> 1
        </Box>
      }
      actions={
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button>{isEvent ? 'Save' : 'Create'}</Button>
        </Box>
      }
    >
      <Grid container spacing={2} py={2}>
        <Grid item xs={6}>
          <Autocomplete<string, false, false, false>
            options={fakeStudents}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => <li {...props}>{option}</li>}
            renderInput={(props) => (
              <TextField
                {...props}
                label="Student"
                placeholder="Student"
                InputProps={{
                  ...props.InputProps,
                  startAdornment: <Person />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete<string, false, false, false>
            options={fakeMentors}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => <li {...props}>{option}</li>}
            renderInput={(props) => (
              <TextField
                {...props}
                label="Mentor"
                placeholder="Mentor"
                InputProps={{
                  ...props.InputProps,
                  startAdornment: <PersonAdd />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date"
            placeholder="Date"
            InputProps={{ startAdornment: <AccessTime /> }}
          />
        </Grid>
        <Grid item xs={12} display="flex">
          <TextField
            fullWidth
            label="Mentor Email"
            placeholder="Mentor Email"
            defaultValue="mentor@email.com"
            InputProps={{ startAdornment: <Email /> }}
            sx={{ mr: 2 }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Notify"
          />
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center">
          <PhotoCameraFront sx={{ mr: 2 }} />
          <RadioGroup
            row
            aria-labelledby="meeting-type"
            name="meetingType"
            defaultValue="google-meet"
          >
            <FormControlLabel
              value="ms-teams"
              control={<Radio />}
              label="Microsoft Teams"
            />
            <FormControlLabel
              value="google-meet"
              control={<Radio />}
              label="Google Meet"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            label="Notes"
            placeholder="Notes"
            InputProps={{ startAdornment: <Notes /> }}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default EventModal;
