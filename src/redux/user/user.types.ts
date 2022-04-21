import { Career } from '../careers/careers.types';
import { Language } from '../language/language.types';
import { Library } from '../library/library.types';
import { LogoutAction } from '../logout/logout.types';
import { Subject } from '../subjects/subjects.types';
import { initUser } from './user.reducer';

export const SET_USER = 'SET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export interface User {
  email: string;
  name: string;
  username: string;
  timeZone: string;
  isStudent: boolean;
  isLibrarian: boolean;
  isMentor: boolean;
  dateOfBirth: string;
  mentorProfile?: MentorProfile;
  studentProfile?: {};
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

// Values are kept in backend
enum ApprovalStatus {
  APPROVED = 'Approved',
  NOT_REVIEWED = 'Not Reviewed',
  REJECTED = 'Rejected',
}
export type UserActions = SetUserAction | LogoutAction;
