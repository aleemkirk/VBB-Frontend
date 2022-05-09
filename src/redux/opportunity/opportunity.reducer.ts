import { Oppty, OpptyActions, SET_OPPTY } from './opportunity.types';

export const oppty = (state = [] as Oppty[], action: OpptyActions) => {
  switch (action.type) {
    case SET_OPPTY:
      return action.payload;
    default:
      return state;
  }
};
