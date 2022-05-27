export const LOGIN = 'LOGIN';
export const AUTO_LOGIN = 'AUTO_LOGIN';

export interface LOGIN_PAYLOAD {
  username: string;
  password: string;
}

export interface LOGIN_ACTION {
  type: typeof LOGIN;
  payload: LOGIN_PAYLOAD;
}
export interface AUTO_LOGIN_ACTION {
  type: typeof AUTO_LOGIN;
}
