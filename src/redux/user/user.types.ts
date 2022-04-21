import { LogoutAction } from '../logout/logout.types';
import { initUser } from './user.reducer';

export const SET_USER = 'SET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: USER;
}

export type USER = typeof initUser;
export type UserActions = SetUserAction | LogoutAction;
