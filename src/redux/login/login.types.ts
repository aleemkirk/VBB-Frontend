export const LOGIN = 'LOGIN';

export interface LOGIN_PAYLOAD {
  username: string;
  password: string;
}

export interface LOGIN_ACTION {
  type: typeof LOGIN;
  payload: LOGIN_PAYLOAD;
}
