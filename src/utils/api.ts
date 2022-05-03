import { studentProfiles } from './StudentProfileData';
import {Profile, ProfileTypes} from '../utils/Profile';
import {Events, CalendarEvent} from '../utils/Events';
import { MentorProfiles } from './MentorProfiles';
import { Announcement, announcements } from '../utils/Announcements';
import {Session, Sessions} from './Session';



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


//Sessions
export const getMentorSessions = (id?:string):Session[] => {
    if(id == undefined) return Sessions;    

    return Sessions.filter(session => session.mentorID == id)
}

export const getStudentSessions = (id?:string):Session[] => {
    if(id == undefined) return Sessions;    

    return Sessions.filter(session => session.studentID == id)
}

export const getSessions  = (userProfile?:Profile) => {
    if(userProfile == undefined) return Sessions;
    if(userProfile.type == ProfileTypes.MENTOR) return getMentorSessions(userProfile.id);
    else if(userProfile.type == ProfileTypes.STUDENT) return getStudentSessions(userProfile.id);
    return [];
}