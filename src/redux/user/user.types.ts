import { Career } from '../careers/careers.types';
import { Language } from '../language/language.types';
import { Library } from '../library/library.types';
import { Subject } from '../subjects/subjects.types';

export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export interface GetUserAction {
  type: typeof GET_USER;
}


export interface User {
  email?: string;
  firstName: string;
  lastName: string;
  name: string;
  username?: string;
  timeZone: string;
  isEmailVerified: boolean;
  isLibrarian: boolean;
  isMentor: boolean;
  isStudent: boolean;
  profileImage?:string;
  dateOfBirth: string | null;
  mentorProfile?: MentorProfile;
  studentProfile?: StudentProfile;
}

export interface MentorProfile {
  assignedLibrary: Library;
  careers: Career[];
  subjects: Subject[];
  hasCompletedTraining: boolean;
  interests: string;
  phoneNumber: string;
  secondaryEmail: string;
  completedRegistration: boolean;
  mentoringLanguages: Language[];
  approvalStatus: ApprovalStatus;
}

export interface StudentProfile {
  assignedLibrary: Library;
  careersOfInterest: Career[];
  mentoringLanguages: Language[];
  subjects: Subject[];
}

export interface AuthToken {
  access: string;
  refresh: string;
}

// Values are kept in backend
enum ApprovalStatus {
  APPROVED = 'Approved',
  NOT_REVIEWED = 'Not Reviewed',
  REJECTED = 'Rejected',
}

export type UserActions = SetUserAction;
