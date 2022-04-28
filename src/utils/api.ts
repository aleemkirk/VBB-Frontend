import { studentProfiles } from './StudentProfileData';
import {Profile} from '../utils/Profile';
import {Events} from '../utils/Events';
import { MentorProfiles } from './MentorProfiles';
import { CalendarEvent } from './SessionInterfaces';
import { Announcement, announcements } from '../utils/Announcements';


export const getStudentProfles = (program?: string):Profile[] => {
    return studentProfiles;
}


export const getEvents = (program?: string):CalendarEvent[] => {
    return Events
}

export const getMentorProfiles = async (program?: string):Promise<Profile[]> => {
    const x = () => {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    };
    await x();
    return MentorProfiles;
};

export const getAnnounements = (program?: string):Announcement[] => {
    return announcements;
}