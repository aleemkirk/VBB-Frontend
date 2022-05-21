import { LOGOUT, LogoutAction } from './logout.types';

export const logout = (): LogoutAction => ({ type: LOGOUT });
