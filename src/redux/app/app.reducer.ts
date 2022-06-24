import { AppActions, App, CLOSE_APP_ALERT, UPDATE_APP_STATE, UPDATE_APP_TOKEN, APP_ALERT} from './app.types';
import { LogoutAction } from '../logout/logout.types';
import { VerifyResponseAction, VerifyTokenAction, VerifyResponseFailedAction, VERIFY_RESPONSE, SUBMIT_EMAIL_VERIFY, VERIFY_RESPONSE_FAILED } from '../registration/registration.types';

export const initialState = {
  loading: false,
  error: null,
  payload: null,
  access_token: null,
  refresh_token: null,
  expires_at: null,
  isAuthenticated:false,
  success: false,
  verify_success: false,
  notifications: [],
  alertMsg:'',
  isAlertOpen:false,
  alertSeverity: 'success'
} as App;

export const appState = (
  state = initialState,
  action: AppActions | LogoutAction | VerifyTokenAction | VerifyResponseAction | VerifyResponseFailedAction
): App => {
  switch (action.type) {
    case UPDATE_APP_STATE:
      return action.payload;

    case UPDATE_APP_TOKEN:
      var token_data = action.payload;
      state.access_token = token_data.access_token
      state.refresh_token = token_data.refresh_token
      state.isAuthenticated = true;
      return state;

    case APP_ALERT:
      var alert_data = action.payload;
      return {
          ...state,
          alertMsg:alert_data.alertMsg,
          alertSeverity:alert_data.alertSeverity,
          isAlertOpen: true
        };
      return state;

    case CLOSE_APP_ALERT:
      return {
          ...state,
          alertMsg:'',
          isAlertOpen:false,
        };
    case SUBMIT_EMAIL_VERIFY:
      return {
          ...state,
          loading:true
        };
    case VERIFY_RESPONSE:
      return {
          ...state,
          verify_success:true,
          loading:false
        };
    case VERIFY_RESPONSE_FAILED:
      return {
          ...state,
          verify_success:false,
          loading:false
        };
    default:
      return state;
  }
};
