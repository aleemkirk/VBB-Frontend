import { AppActions, App, API_REQUEST, API_REQUEST_SUCCESS, API_REQUEST_FAILED, CLOSE_APP_ALERT, UPDATE_APP_STATE, UPDATE_APP_TOKEN, APP_ALERT} from './app.types';
import { LogoutAction, LOGOUT } from '../logout/logout.types';
import { RegistrationActions, VERIFY_RESPONSE, SUBMIT_EMAIL_VERIFY, VERIFY_RESPONSE_FAILED, COMPLETE_STUDENT_ONBOARD, COMPLETE_MENTOR_ONBOARD} from '../registration/registration.types';

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
  action: AppActions | LogoutAction | RegistrationActions
): App => {
  switch (action.type) {
    case UPDATE_APP_STATE:
      return action.payload;

    case UPDATE_APP_TOKEN:
      var token_data = action.payload;
      return {
          ...state,
          access_token:token_data.access_token,
          refresh_token:token_data.refresh_token,
          isAuthenticated:true
        };
   case LOGOUT:
      state.access_token = null;
      state.refresh_token = null;
      state.isAuthenticated = false;
      return state;

    case APP_ALERT:
      var alert_data = action.payload;
      return {
          ...state,
          alertMsg:alert_data.alertMsg,
          alertSeverity:alert_data.alertSeverity,
          isAlertOpen: true
        };

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
    case COMPLETE_STUDENT_ONBOARD:
      return {
          ...state,
          loading:true
        };

    case API_REQUEST:
      return {
          ...state,
          loading:true,
          error:null,
          payload:null
        };

    case API_REQUEST_SUCCESS:
      var api_response = action.payload;
      return {
          ...state,
          loading:false,
          payload:api_response,
          success:true
        };

    case API_REQUEST_FAILED:
      var api_response = action.payload;
      return {
          ...state,
          loading:false,
          error:api_response,
          payload:api_response
        };
    default:
      return state;
  }
};
