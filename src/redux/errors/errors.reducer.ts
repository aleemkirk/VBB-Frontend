import { CLEAR_ERRORS, ErrorActions, Errors, SET_ERRORS } from './errors.types';

export const initErrors = {
  loginErrors: {
    message: '',
  },
  mentorRegistrationErrors: {
    email: '',
  },
};

export const errors = (
  state = initErrorState,
  action: ErrorActions
): Errors => {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return initErrorState;
    default:
      return state;
  }
};
