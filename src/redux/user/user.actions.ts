import { SET_USER, SetUserAction, User } from './user.types';

export const setUser = (user: User): SetUserAction => ({
  type: SET_USER,
  payload: user,
});
