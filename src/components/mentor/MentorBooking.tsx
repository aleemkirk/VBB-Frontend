import { Calendar, Views, luxonLocalizer, SlotInfo } from 'react-big-calendar';
import { DateTime } from 'luxon';
import { Box } from '@mui/material';
import { Session, Sessions } from '../../utils/Session';
import { getSessions, getMentorProfile } from '../../utils/api';
import { useMemo, useState } from 'react';
import MentorBookingModal from './MentorBookingModal';
import { CalendarEvent } from '../../utils/CalendarEvent';
import { Person as PersonIcon, Computer as ComputerIcon } from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/material';


interface EventComponenetProps {
    event: CalendarEvent; 
    title?:string;
  }
  

const localizer = luxonLocalizer(DateTime);

////Custom Components 
const customComponents = {
    event: ({event}:EventComponenetProps) => {
      return (
        <Box display="flex" alignItems="center">
          <PersonIcon sx={{m:'1px'}}/> <Typography variant="button" marginLeft='10px'>{event.id}</Typography>
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

  const dummyCalendarEvent: CalendarEvent[] = [{
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
    start: DateTime.now().set({ hour: 1, minute: 0 }).toJSDate(),
    end: DateTime.now()
      .set({ hour: 1, minute: 0 })
      .plus({ hour: 1 })
      .toJSDate(),
    computerID: '3'
  },
]

const MentorBooking = () => {

    const user = useMemo(()=> getMentorProfile('1'), []);
    const fakeSessions = useMemo(()=>getSessions(user), []);
    const [event, setEvent] = useState<CalendarEvent | SlotInfo | null>(null);

    return(
        <Box p={2}>
        <Calendar<CalendarEvent>
            localizer={localizer}
            defaultView={Views.WEEK}
            views={[Views.WEEK, Views.DAY, Views.AGENDA]}
            events={dummyCalendarEvent}
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
        <MentorBookingModal eventOrSlot={event} onClose={() => setEvent(null)}/>
        </Box>
    )

}


export default MentorBooking;