export const SUBMIT_MENTOR_REGISTRATION = 'SUBMIT_MENTOR_REGISTRATION';
export interface MentorRegistraionForm {
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
}

export interface SubmitMentorRegistrationAction {
  type: typeof SUBMIT_MENTOR_REGISTRATION;
  payload: MentorRegistraionForm;
}
