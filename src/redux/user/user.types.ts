import { Career } from '../careers/careers.types';
import { Language } from '../language/language.types';
import { Library } from '../library/library.types';
import { Subject } from '../subjects/subjects.types';

export const SET_USER = 'SET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export interface User {
  email?: string;
  name: string;
  username?: string;
  timeZone: string;
  isEmailVerified: boolean;
  isLibrarian: boolean;
  isMentor: boolean;
  isStudent: boolean;
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

// Values are kept in backend
enum ApprovalStatus {
  APPROVED = 'Approved',
  NOT_REVIEWED = 'Not Reviewed',
  REJECTED = 'Rejected',
}

export type UserActions = SetUserAction;
