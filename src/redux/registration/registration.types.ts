export const SUBMIT_MENTOR_REGISTRATION = 'SUBMIT_MENTOR_REGISTRATION';
export interface MentorOnboardingForm {
  careers: number[];
  mentoringLanguages: number[];
  subjects: number[];
  applicationVideoUrl: string;
  interests: string;
  phoneNumber: string;
  secondaryEmail: string;
  isOfAge: boolean;
  timezone: string;
  dateOfBirth: string;
}


export interface MentorRegistrationForm {
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
  email: string;
  corporateCode: string;
}

export interface SubmitMentorRegistrationAction {
  type: typeof SUBMIT_MENTOR_REGISTRATION;
  payload: MentorRegistrationForm;
}

export const SUBMIT_STUDENT_REGISTRATION = 'SUBMIT_STUDENT_REGISTRATION';

export interface StudentRegistrationForm {
  libraryCode: string;
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
  username: string;
}

export interface SubmitStudentRegistrationAction {
  type: typeof SUBMIT_STUDENT_REGISTRATION;
  payload: StudentRegistrationForm;
}

export const SUBMIT_MENTOR_SIGN_UP = 'SUBMIT_MENTOR_SIGN_UP';
export interface MentorSignUpForm {
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
  email: string;
  corporateCode: string;
}

export interface SubmitMentorSignUpAction {
  type: typeof SUBMIT_MENTOR_SIGN_UP;
  payload: MentorSignUpForm;
}

export interface SubmitMentorSignUpErrorResponse {
  message: string;
}


//Verify Email Actions
export const SUBMIT_EMAIL_VERIFY = 'SUBMIT_EMAIL_VERIFY';
export interface VerifyTokenForm {
  token: string;
}

export interface VerifyTokenAction {
  type: typeof SUBMIT_EMAIL_VERIFY;
  payload: VerifyTokenForm;
}

//
export const VERIFY_RESPONSE = 'VERIFY_RESPONSE';
export const VERIFY_RESPONSE_FAILED = 'VERIFY_RESPONSE_FAILED';

export interface VerifyResponseAction {
  type: typeof VERIFY_RESPONSE;
  payload: any;
}

export interface VerifyResponseFailedAction {
  type: typeof VERIFY_RESPONSE_FAILED;
  payload: any;
}
