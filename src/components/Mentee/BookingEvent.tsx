import {Box, Button, CardHeader, Grid, Typography, Card, Divider } from '@mui/material';
  import { SlotInfo } from 'react-big-calendar';
  import Modal from '../shared/Modal';
  import { CalendarEvent, isCalendarEvent } from '../librarian/LibrarianCalendar';
  import {
    AccessTime,
    Computer as ComputerIcon,} from '@mui/icons-material';
  
  interface EventModalProps {
    eventOrSlot: CalendarEvent | SlotInfo | null;
    onClose: () => void;
  }
  
  const fakeComputers = ['Computer 1', 'Computer 2', 'Computer 3'];
  const fakeTime= '04/21, Thursday, 1-2pm';
  
  const BookingEvent = ({ eventOrSlot, onClose }: EventModalProps) => {
    const isEvent = isCalendarEvent(eventOrSlot);
    return (
      <Modal
        open={Boolean(eventOrSlot)}
        onClose={onClose}
        // @ts-ignore
        title={
          <Box display="flex" alignItems="center">
            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" columnSpacing={2}>
            <Grid item >
            < AccessTime/></Grid><Grid item ><Typography variant='h5'>{fakeTime}</Typography></Grid>
            </Grid>

          </Box>
        }
        actions={
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Button>{isEvent ? 'Save' : 'Select'}</Button>
          </Box>
        }>

          <Grid item xs={12}>
          {fakeComputers.map((Computer) => 
          <div>
          <Card>
          <CardHeader
            title={Computer}
            avatar={<ComputerIcon />}
          />
        </Card>
        <Divider/>
        </div>
          )}
          </Grid>
         
      </Modal>
    );
  };
  
  export default BookingEvent;
  