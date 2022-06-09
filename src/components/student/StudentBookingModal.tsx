import Modal from '../shared/Modal';
import {SlotSessions} from './StudentBooking';
import { CalendarEvent, isCalendarEvent } from '../../utils/CalendarEvent';
import { Calendar, Views, luxonLocalizer, SlotInfo } from 'react-big-calendar';
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
    TextField,
  } from '@mui/material';
  import {
    AccessTime,
    Computer,
    Email,
    Notes,
    Person,
    PersonAdd,
    PhotoCameraFront,
  } from '@mui/icons-material';
import { useState } from 'react';

interface StudentBookingModalProps {
    sessions: CalendarEvent | SlotInfo | null;
    onClose: () => void;

}

export const isSlotSessions = (
    sessions: CalendarEvent | SlotInfo | null
  ): sessions is CalendarEvent => {
    return sessions ? 'id' in sessions : false;
  };

const StudentBookingModal = ({sessions, onClose}:StudentBookingModalProps) => {

    const [disable, setDisable] = useState<boolean>(true);

    const modaltitle = 'Book your sessions now';
    const isCalEvent = isSlotSessions(sessions);
    const computerOptions: string[] = ['1', '2', '3', '4'];
    return (
        <Modal open={Boolean(sessions)} 
        onClose={onClose} 
        title={modaltitle}
        actions={
            <Box display="flex" justifyContent="center" width="100%">
              <Button onClick={() => console.log('Submit Form')} disabled={disable}>Book Session</Button>
            </Box>
          }>

        <Grid container spacing={2} py={2}>
        <Grid item xs={12}>
          <Autocomplete<string, false, false, false>
            options={computerOptions}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => <li {...props}>{option}</li>}
            renderInput={(props) => (
              <TextField
                {...props}
                label="Available Computers"
                placeholder="Select your prefered computer"
                InputProps={{
                  ...props.InputProps,
                  startAdornment: <Computer />,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Date'
            placeholder={sessions ? sessions.start.toString() : ''}
            value={sessions ? sessions.start.toString() : ''}
            InputProps={{ startAdornment: <AccessTime /> }}
          />
        </Grid>

        <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
        </Grid>

        <Grid item xs={12} display="flex">

            <Box display="flex" justifyContent="flex-end" width="100%">

                <FormControlLabel
                    control={<Checkbox />}
                    label="Agree"
                    sx={{align:'center'}}
                    value={disable}
                    onChange = {() => setDisable(!disable)}
                />
            </Box>
            
        </Grid>

      </Grid>
        </Modal>
    );

}


export default StudentBookingModal;