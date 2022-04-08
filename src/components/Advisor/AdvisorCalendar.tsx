import { useState } from 'react';
import { Calendar, Views, luxonLocalizer, SlotInfo } from 'react-big-calendar';
import { DateTime } from 'luxon';
import EventModal from '../EventModal';
import {getEvents} from '../../utils/api';
import {Events} from '../../utils/Events';

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

const AdvisorCalendar = () => {
  const [event, setEvent] = useState<CalendarEvent | SlotInfo | null>(null);

  const events = getEvents();

  return (
    <>
      <Calendar<CalendarEvent>
        localizer={localizer}
        defaultView={Views.WEEK}
        views={[Views.WEEK, Views.DAY, Views.AGENDA]}
        events={events}
        onSelectEvent={setEvent}
        onSelectSlot={setEvent}
        selectable
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000 }}
      />
      <EventModal eventOrSlot={event} onClose={() => setEvent(null)} />
    </>
  );
};

export default AdvisorCalendar;
