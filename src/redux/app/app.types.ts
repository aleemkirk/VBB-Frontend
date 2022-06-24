export const UPDATE_APP_STATE = 'UPDATE_APP_STATE';
export const UPDATE_APP_TOKEN = 'UPDATE_APP_TOKEN';
export const APP_ALERT = 'APP_ALERT';
export const CLOSE_APP_ALERT = 'CLOSE_APP_ALERT';

export interface SetAppAction {
  type: typeof UPDATE_APP_STATE;
  payload: App;
}

export interface SetAppToken {
  type: typeof UPDATE_APP_TOKEN;
  payload: AuthToken;
}

export interface SetAppAlert {
  type: typeof APP_ALERT;
  payload: AlertPayload;
}

export interface CloseAppAlertAction {
  type: typeof CLOSE_APP_ALERT;
}

export type AlertColor = 'success' | 'error' | 'warning' | 'info';

export interface App {
  loading: boolean;
  error: any | null;
  payload:  any | null;
  access_token:  any | null;
  refresh_token:  any | null;
  expires_at:  any | null;
  isAuthenticated:  boolean;
  success: boolean;
  verify_success:boolean;
  notifications: any[] | null;
  alertMsg:string;
  isAlertOpen:boolean;
  alertSeverity: AlertColor | undefined;
}

export interface AuthToken {
  access_token: string;
  refresh_token: string;
}

export interface AlertPayload {
  alertMsg: string;
  alertSeverity: AlertColor | undefined;
}



export type AppActions = SetAppAction | SetAppToken | SetAppAlert | CloseAppAlertAction ;
