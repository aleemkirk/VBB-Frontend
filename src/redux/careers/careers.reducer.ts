import { Career, CareerActions, SET_CAREERS } from './careers.types';

export const careers = (state = [] as Career[], action: CareerActions) => {
  switch (action.type) {
    case SET_CAREERS:
      return action.payload;
    default:
      return state;
  }
};
