import { Career } from '../careers/careers.types';
import { Language } from '../language/language.types';
import { Library } from '../library/library.types';
import { Subject } from '../subjects/subjects.types';

export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';

export const UPDATE_MENTOR_PROFILE = 'UPDATE_MENTOR_PROFILE';
export const UPDATE_MENTOR_PROFILE_SUCCESS = 'UPDATE_MENTOR_PROFILE_SUCCESS';
export const UPDATE_MENTOR_PROFILE_FAILED = 'UPDATE_MENTOR_PROFILE_FAILED';


export interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export interface GetUserAction {
  type: typeof GET_USER;
}


export interface User {
  id:number;
  pk:number;
  email?: string;
  firstName: string;
  lastName: string;
  name: string;
  username?: string;
  role:number;
  timeZone: string;
  isEmailVerified: boolean;
  isLibrarian: boolean;
  isMentor: boolean;
  isStudent: boolean;
  profileImage?:string;
  dateOfBirth: string | null;
  mentorProfile?: MentorProfile;
  studentProfile?: StudentProfile;
  advisorProfile?: AdvisorProfile;
  librarianProfile?: LibrarianProfile;
}

export interface MentorProfile {
  assignedLibrary: Library;
  organization: any | null;
  opportunities: any[];
  careers: Career[];
  subjects: Subject[];
  hasCompletedTraining: boolean;
  interests: string;
  phoneNumber: string;
  secondaryEmail: string;
  completedRegistration: boolean;
  mentoringLanguages: Language[];
  approvalStatus: ApprovalStatus;
  isOnboarded:boolean;
  canMeetConsistently:boolean;
  crimesOrMisdemeanor:boolean;
  crimesOrMisdemeanorResponses?: string;
  meetProvider:any;
  corporateCode:string;
  applicationVideoUrl:string;
}

export interface StudentProfile {
  assignedLibrary: Library;
  careersOfInterest: Career[];
  mentoringLanguages: Language[];
  subjects: Subject[];
  isOnboarded:boolean;
  approvalStatus: ApprovalStatus;
}


export interface AdvisorProfile {
  library: Library;
  bio:string;
}

export interface LibrarianProfile {
  library: Library;
  bio:string;
}

export interface AuthToken {
  access: string;
  refresh: string;
}

export interface UpdateMentorProfileAction {
  type: typeof UPDATE_MENTOR_PROFILE;
  payload: any;
}

// Values are kept in backend
enum ApprovalStatus {
  APPROVED = 'Approved',
  NOT_REVIEWED = 'Not Reviewed',
  REJECTED = 'Rejected',
}



export type UserActions = SetUserAction | UpdateMentorProfileAction;
