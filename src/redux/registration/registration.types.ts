import { NavigateFunction } from 'react-router-dom';

export const SUBMIT_MENTOR_REGISTRATION = 'SUBMIT_MENTOR_REGISTRATION';
export interface MentorRegistrationForm {
  careers: number[];
  mentoringLanguages: number[];
  subjects: number[];
  applicationVideoUrl: string;
  interests: string;
  phoneNumber: string;
  secondaryEmail: string;
  corporateCode: string;
  isOfAge: boolean;
  timezone: string;
  dateOfBirth: string;
}

export interface SubmitMentorRegistrationPayload {
  mentorRegistrationForm: MentorRegistrationForm;
  navigateFunction: NavigateFunction;
}

export interface SubmitMentorRegistrationAction {
  type: typeof SUBMIT_MENTOR_REGISTRATION;
  payload: {
    mentorRegistrationForm: MentorRegistrationForm;
    navigateFunction: NavigateFunction;
  };
}

export const SUBMIT_STUDENT_REGISTRATION = 'SUBMIT_STUDENT_REGISTRATION';

export interface StudentRegistrationForm {
  careersOfInterest: number[];
  interests: string;
  libraryCode: string;
  mentoringLanguages: number[];
  name: string;
  password: string;
  subjects: number[];
  timezone: string;
  username: string;
}
export interface SubmitStudentRegistrationPayload {
  studentRegistrationForm: StudentRegistrationForm;

  navigateFunction: NavigateFunction;
}

export interface SubmitStudentRegistrationAction {
  type: typeof SUBMIT_STUDENT_REGISTRATION;
  payload: SubmitStudentRegistrationPayload;
}