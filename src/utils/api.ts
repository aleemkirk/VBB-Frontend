import { studentProfiles } from './StudentProfileData';
import {Profile} from '../utils/Profile';
import {Events} from '../utils/Events';
import { MentorProfiles } from './MentorProfiles';
import { CalendarEvent } from '../components/Advisor/AdvisorCalendar';
import { Announcement, announcements } from '../utils/Announcements';

export const getStduentProfles = (program?: string):Profile[] => {
    return studentProfiles;
}


export const getEvents = (program?: string):CalendarEvent[] => {
    return Events
}

export const getMentorProfiles = (program?: string):Profile[] => {
    return MentorProfiles;
}

export const getAnnounements = (program?: string):Announcement[] => {
    return announcements;
}