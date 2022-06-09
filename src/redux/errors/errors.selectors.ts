import { AppState } from '../rootReducer';

export const mentorSignUpErrors = (state: AppState) =>
  state.errors.mentorSignUpErrors.message;
