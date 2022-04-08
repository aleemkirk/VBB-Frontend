import { LOGOUT } from '../logout/logout.types';
import { UserActions, SET_USER, USER } from './user.types';

export const initUser = {
  email: '',
  name: '',
  username: '',
  timeZone: '',
  isStudent: false,
  isLibrarian: false,
  isMentor: false,
};

export const user = (state = initUser, action: UserActions): USER => {
  switch (action.type) {
    case LOGOUT:
      return initUser;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
