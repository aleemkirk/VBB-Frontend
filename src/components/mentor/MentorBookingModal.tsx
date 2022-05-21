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
  Typography,
} from '@mui/material';
import { SlotInfo } from 'react-big-calendar';
import Modal from '../shared/Modal';
import { CalendarEvent, isCalendarEvent } from '../../utils/CalendarEvent';
import {
  AccessTime,
  Notes,
  Person,
  PhotoCameraFront,
} from '@mui/icons-material';
import { SlotSessions } from '../../utils/Session';
import { useState } from 'react';

interface EventModalProps {
  eventOrSlot: CalendarEvent | SlotInfo | null | SlotSessions;
  onClose: () => void;
}

const fakeStudents = ['Student 1', 'Student 2', 'Student 3'];
const fakeMentors = ['Mentor 1', 'Mentor 2', 'Mentor 3'];

const MentorBookingModal = ({ eventOrSlot, onClose }: EventModalProps) => {
  const isEvent = isCalendarEvent(eventOrSlot);
  const [disable, setDisable] = useState<boolean>(true);

  return (
    <Modal
      open={Boolean(eventOrSlot)}
      onClose={onClose}
      title="Confirm Your Appointment"
      actions={
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button onSubmit={() => onClose()} disabled={disable}>
            {isEvent ? 'Book' : 'Create'}
          </Button>
        </Box>
      }
    >
      <Grid container spacing={2} py={2}>
        <Grid item xs={12}>
          <Autocomplete<string>
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date"
            placeholder={isEvent ? eventOrSlot.start.toString() : ''}
            value={isEvent ? eventOrSlot.start.toString() : ''}
            InputProps={{ startAdornment: <AccessTime /> }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Declaration</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>

        <Grid item xs={12} display="flex">
          <Box display="flex" justifyContent="flex-end" width="100%">
            <FormControlLabel
              control={<Checkbox />}
              label="Agree"
              sx={{ align: 'center' }}
              value={disable}
              onChange={() => setDisable(!disable)}
            />
          </Box>
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

export default MentorBookingModal;
