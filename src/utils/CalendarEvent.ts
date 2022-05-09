
import {ReactNode } from 'react';
import { SlotSessions } from './Session';
import {SlotInfo } from 'react-big-calendar';

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

  export const isCalendarEvent = (
    event: CalendarEvent | SlotInfo | null | SlotSessions
  ): event is CalendarEvent => {
    return event ? 'id' in event : false;
  };
  