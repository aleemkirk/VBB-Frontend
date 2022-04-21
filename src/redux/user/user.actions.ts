import { SET_USER, SetUserAction, USER } from './user.types';

export const setUser = (user: USER): SetUserAction => ({
  type: SET_USER,
  payload: user,
});
