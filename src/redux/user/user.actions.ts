import { SET_USER, SET_USER_ACTION, USER } from './user.types';

export const setUser = (user: USER): SET_USER_ACTION => ({
  type: SET_USER,
  payload: user,
});
