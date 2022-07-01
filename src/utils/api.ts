import { studentProfiles } from './StudentProfileData';
import { Profile, ProfileTypes } from '../utils/Profile';
import { Events, CalendarEvent } from '../utils/Events';
import { MentorProfiles } from './MentorProfiles';
import { Announcement, announcements } from '../utils/Announcements';
import { Session, Sessions } from './Session';

//Events
export const getEvents = (program?: string): CalendarEvent[] => {
  return Events;
};
//--------------------------------------------------------------------------

//Mentor Profiles
export const getMentorProfiles = async (
  program?: string
): Promise<Profile[]> => {
  const x = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };
  await x();
  return MentorProfiles;
};

export const getMentorProfile = (id?: string): Profile | undefined => {
  if (id === undefined) return;
  return MentorProfiles.filter((profile) => profile.id === id)[0];
};

//--------------------------------------------------------------------------

//Student Profiles
export const getStudentProfles = (program?: string): Profile[] => {
  return studentProfiles;
};

export const getStudentProfile = (id?: string): Profile | undefined => {
  if (id === undefined) return;
  return studentProfiles.filter((profile) => profile.id === id)[0];
};

//--------------------------------------------------------------------------

//Announcements
export const getAnnounements = (program?: string): Announcement[] => {
  return announcements;
};

//--------------------------------------------------------------------------

//Sessions
export const getMentorSessions = (id?: string): Session[] => {
  if (id === undefined) return Sessions;

  return Sessions.filter((session) => session.mentorID === id);
};

export const getStudentSessions = (id?: string): Session[] => {
  if (id === undefined) return Sessions;

  return Sessions.filter((session) => session.studentID === id);
};

export const getSessions = (userProfile?: Profile) => {
  if (userProfile === undefined) return Sessions;
  if (userProfile.type === ProfileTypes.MENTOR)
    return getMentorSessions(userProfile.id);
  else if (userProfile.type === ProfileTypes.STUDENT)
    return getStudentSessions(userProfile.id);
  return [];
};


export const renderAPIMsg = (apiResponse?: any) => {
  if (apiResponse === undefined || apiResponse === null ) return '';
  if (apiResponse.message)
    return apiResponse.message
  else if (apiResponse.detail)
    return apiResponse.detail
  else if (apiResponse.error)
    return apiResponse.error
  else if (apiResponse.success)
    return apiResponse.success
  return '';
};
