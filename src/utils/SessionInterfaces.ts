//File for defining shared interfaces between components

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
  }