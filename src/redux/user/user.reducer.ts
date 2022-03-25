import { LOGOUT } from '../logout/logout.types';
import { USER_ACTIONS, SET_USER, USER } from './user.types';

export const initUser = {
  email: '',
  name: '',
  username: '',
  timeZone: '',
};

export const user = (state = initUser, action: USER_ACTIONS): USER => {
  switch (action.type) {
    case LOGOUT:
      return initUser;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
