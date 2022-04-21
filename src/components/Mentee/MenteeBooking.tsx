import { useState } from 'react';
import { Calendar, Views, luxonLocalizer, SlotInfo } from 'react-big-calendar';
import { DateTime } from 'luxon';
import EventModal from '../shared/EventModal';
import BookingEvent from './BookingEvent';
import MenteeSideBar from './MenteeSideBar';
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

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

export const isCalendarEvent = (
  event: CalendarEvent | SlotInfo | null
): event is CalendarEvent => {
  return event ? 'id' in event : false;
};

const localizer = luxonLocalizer(DateTime);

const MenteeBooking = () => {
  const [event, setEvent] = useState<CalendarEvent | SlotInfo | null>(null);

  return (
    <>
    <MenteeSideBar/>
    <Box sx={{
        ml: 15,
        mt: 5,
        mr: 10}}>
      <Calendar<CalendarEvent>
        localizer={localizer}
        defaultView={Views.WEEK}
        views={[Views.WEEK, Views.DAY, Views.AGENDA]}
        events={[
          {
            id: '0',
            title: 'Test Event',
            start: DateTime.now().set({ minute: 0 }).toJSDate(),
            end: DateTime.now().set({ minute: 0 }).plus({ hour: 1 }).toJSDate(),
          },
        ]}
        onSelectEvent={setEvent}
        onSelectSlot={setEvent}
        selectable
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
      />
      <BookingEvent eventOrSlot={event} onClose={() => setEvent(null)} />
      </Box>

    </>
  );
};

export default MenteeBooking;