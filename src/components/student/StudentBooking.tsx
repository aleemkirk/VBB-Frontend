import { useState, ReactNode } from 'react';
import { Calendar, Views, luxonLocalizer, SlotInfo } from 'react-big-calendar';
import { DateTime } from 'luxon';
import EventModal from '../shared/EventModal';
import { Box } from '@mui/material';
import { Computer as ComputerIcon } from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/material';
import StudentBookingModal from './StudentBookingModal';

export interface CalendarEvent {
  id: string;
  color: string;
  title: ReactNode;
  start: Date;
  end: Date;
  computerID: string;
  mentor?: string;
  student?: string;
}

export interface SlotSessions {
  id: string;
  start: Date;
  end: Date;
  availableSessions: CalendarEvent[];
}

interface EventComponenetProps {
  event: SlotSessions; 
  title?:string;
}

////Dummy Data
const events: CalendarEvent[] = [
  {
    id: '0',
    color: '#9eded0',
    title: (
      <Box display="flex" alignItems="center">
        <ComputerIcon /> 2
      </Box>
    ),
    start: DateTime.now().set({ hour: 12, minute: 0 }).toJSDate(),
    end: DateTime.now()
      .set({ hour: 12, minute: 0 })
      .plus({ hour: 1 })
      .toJSDate(),
      computerID: '1'
  },
  {
    id: '1',
    color: '#d6e2f0',
    title: (
      <Box display="flex" alignItems="center">
        <ComputerIcon /> 1
      </Box>
    ),
    start: DateTime.now().set({ hour: 12, minute: 0 }).toJSDate(),
    end: DateTime.now()
      .set({ hour: 12, minute: 0 })
      .plus({ hour: 1 })
      .toJSDate(),
      computerID: '3'
  },
]

const slotSessions: SlotSessions[] = [
  {
    id:'0',
    start: DateTime.now().set({ hour: 12, minute: 0 }).toJSDate(),
    end: DateTime.now()
      .set({ hour: 12, minute: 0 })
      .plus({ hour: 1 })
      .toJSDate(),
    availableSessions: events,
  }
]


////Custom Components 
const customComponents = {
  event: ({event}:EventComponenetProps) => {
    return (
      <Box display="flex" alignItems="center">
        <ComputerIcon sx={{m:'1px'}}/> <Typography variant="button" marginLeft='10px'>{event.availableSessions.length}</Typography>
      </Box>
    )
  }, 
}

////formats
const formats = {
  eventTimeRangeFormat: () => { 
    return '';
  },
};


export const isCalendarEvent = (
  event: CalendarEvent | SlotInfo | null | SlotSessions
): event is CalendarEvent => {
  return event ? 'id' in event : false;
};

const localizer = luxonLocalizer(DateTime);


const StudentBooking = () => {
  const [selSessions, setEvent] = useState<SlotSessions | SlotInfo | null>(null);

  return (
    <Box p={2}>
      <Calendar<SlotSessions>
        localizer={localizer}
        defaultView={Views.WEEK}
        views={[Views.WEEK, Views.DAY, Views.AGENDA]}
        events={slotSessions}
        eventPropGetter={(sessions, start, end, isSelected) => ({
          style: { backgroundColor: '#9eded0', color: 'black' },
        })}
        onSelectEvent={setEvent}
        onSelectSlot={setEvent}
        selectable
        startAccessor='start'
        endAccessor='end'
        style={{ height: 700 }}
        components={customComponents}
        formats={formats}
      />
      <StudentBookingModal sessions={selSessions} onClose={() => setEvent(null)}/>
    </Box>
  );
};

export default StudentBooking;
