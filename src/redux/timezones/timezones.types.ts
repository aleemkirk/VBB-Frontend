export const GET_TIMEZONES = 'GET_TIMEZONES';
export const SET_TIMEZONES = 'SET_TIMEZONES';

export interface SetTimezonesAction {
  type: typeof SET_TIMEZONES;
  payload: string[];
}
export interface GetTimezonesAction {
  type: typeof GET_TIMEZONES;
}

export type TimezoneActions = SetTimezonesAction | GetTimezonesAction;
