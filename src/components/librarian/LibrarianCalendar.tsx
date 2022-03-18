import { useState } from 'react';
import { Calendar, Views, luxonLocalizer, SlotInfo } from 'react-big-calendar';
import { DateTime } from 'luxon';
import EventModal from '../EventModal';

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

const LibrarianCalendar = () => {
  const [event, setEvent] = useState<CalendarEvent | SlotInfo | null>(null);

  return (
    <>
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
        style={{ height: 1000 }}
      />
      <EventModal eventOrSlot={event} onClose={() => setEvent(null)} />
    </>
  );
};

export default LibrarianCalendar;
