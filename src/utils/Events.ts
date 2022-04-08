import { DateTime } from 'luxon';
import { CalendarEvent } from '../components/Advisor/AdvisorCalendar';


export type Event = CalendarEvent;



export const Events: CalendarEvent[] = [
    {
        id: '0',
        title: 'Test Event 1',
        start: DateTime.now().set({ minute: 0 }).toJSDate(),
        end: DateTime.now().set({ minute: 0 }).plus({ hour: 1 }).toJSDate(),
      },
      {
        id: '1',
        title: 'Test Event 2',
        start: DateTime.now().set({ minute: 0 }).plus({ hour: -3 }).toJSDate(),
        end: DateTime.now().set({ minute: 0 }).plus({ hour: -2 }).toJSDate(),
      },
      {
        id: '2',
        title: 'Test Event 3',
        start: DateTime.now().set({ minute: 0 }).plus({ hour: 3 }).toJSDate(),
        end: DateTime.now().set({ minute: 0 }).plus({ hour: 4 }).toJSDate(),
      },
]