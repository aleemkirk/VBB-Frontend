import { studentProfiles } from './StudentProfileData';
import {Profile} from '../utils/Profile';
import {Events} from '../utils/Events';
import { MentorProfiles } from './MentorProfiles';
import { CalendarEvent } from '../components/Advisor/AdvisorCalendar';

export const getStduentProfles = ():Profile[] => {
    return studentProfiles;
}


export const getEvents = ():CalendarEvent[] => {
    return Events
}

export const getMentorProfiles = ():Profile[] => {
    return MentorProfiles;
}