import { LOGOUT } from '../logout/logout.types';
import { UserActions, SET_USER, User } from './user.types';

export const initUser = {
  email: '',
  name: '',
  username: '',
  timeZone: '',
  dateOfBirth: '',
  isStudent: false,
  isLibrarian: false,
  isMentor: false,
};

export const user = (state = initUser, action: UserActions): User => {
  switch (action.type) {
    case LOGOUT:
      return initUser;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
