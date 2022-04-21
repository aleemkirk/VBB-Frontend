import { SET_TIMEZONES, TimezoneActions } from './timezones.types';

export const timezones = (state = [] as string[], action: TimezoneActions) => {
  switch (action.type) {
    case SET_TIMEZONES:
      return action.payload;
    default:
      return state;
  }
};
