import { DateTime } from 'luxon';
import { CalendarEvent } from './CalendarEvent';

export interface Session {
  id: string;
  startTime: Date;
  endTime: Date;
  isRecurring: boolean;
  transactionId?: string;
  student: any | null;
  mentor?: any | null;
  meetingID?: string;
  studentID?: string;
  mentorID?: string;
  computer?: any | null;
  conferenceURL?: string;
  reserveStatus?: number;
  reservedDate: Date;
  reserveSlot: number;
  uniqueID: string;
}

export interface SlotSessions {
  id: string;
  start: Date;
  end: Date;
  availableSessions: CalendarEvent[];
}

export const Sessions: Session[] = [

];
