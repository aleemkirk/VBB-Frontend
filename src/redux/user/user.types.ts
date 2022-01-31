import { LOGOUT_ACTION } from '../logout/logout.types';
import { initUser } from './user.reducer';

export const SET_USER = 'SET_USER';

export interface SET_USER_ACTION {
  type: typeof SET_USER;
  payload: USER;
}

export type USER= typeof initUser
export type USER_ACTIONS = SET_USER_ACTION | LOGOUT_ACTION 
