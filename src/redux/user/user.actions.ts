import { SET_USER, SetUserAction, User } from './user.types';

export const setUser = (payload: User): SetUserAction => ({
  type: SET_USER,
  payload,
});
