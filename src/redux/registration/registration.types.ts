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

export interface SubmitMentorRegistrationAction {
  type: typeof SUBMIT_MENTOR_REGISTRATION;
  payload: MentorRegistrationForm;
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

export interface SubmitStudentRegistrationAction {
  type: typeof SUBMIT_STUDENT_REGISTRATION;
  payload: StudentRegistrationForm;
}

export const SUBMIT_MENTOR_SIGN_UP = 'SUBMIT_MENTOR_SIGN_UP';
export interface MentorSignUpForm {
  email: string;
  name: string;
  password: string;
}

export interface SubmitMentorSignUpAction {
  type: typeof SUBMIT_MENTOR_SIGN_UP;
  payload: MentorSignUpForm;
}

export interface SubmitMentorSignUpErrorResponse {
  message: string;
}
