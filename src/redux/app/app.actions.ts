import {
  UPDATE_APP_STATE,
  UPDATE_APP_TOKEN,
  APP_ALERT,
  CLOSE_APP_ALERT,
  API_REQUEST,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILED,
  SetAppToken,
  SetAppAlert,
  CloseAppAlertAction,
  AuthToken,
  AlertPayload,
  SetAPIRequest,
  SetAPIRequestSuccess,
  SetAPIRequestFailed,
} from './app.types';

// export const setUser = (payload: User): SetUserAction => ({
//   type: SET_USER,
//   payload,
// });

export const closeAppAlert = (): CloseAppAlertAction => ({
  type: CLOSE_APP_ALERT,
});

export const setAppToken = (payload: AuthToken): SetAppToken => ({
  type: UPDATE_APP_TOKEN,
  payload,
});

export const setAppAlert = (payload: AlertPayload): SetAppAlert => ({
  type: APP_ALERT,
  payload,
});

export const apiRequest = (payload: any): SetAPIRequest => ({
  type: API_REQUEST,
  payload,
});

export const apiSuccessful = (payload: any): SetAPIRequestSuccess => ({
  type: API_REQUEST_SUCCESS,
  payload,
});

export const apiFailed = (payload: any): SetAPIRequestFailed => ({
  type: API_REQUEST_FAILED,
  payload,
});
