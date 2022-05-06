
import {ReactNode } from 'react';

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