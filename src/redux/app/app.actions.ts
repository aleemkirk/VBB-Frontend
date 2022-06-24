import { UPDATE_APP_STATE, UPDATE_APP_TOKEN, APP_ALERT, CLOSE_APP_ALERT, SetAppToken, SetAppAlert, CloseAppAlertAction, AuthToken, AlertPayload } from './app.types';

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
