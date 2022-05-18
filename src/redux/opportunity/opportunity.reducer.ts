import { Opportunity, OpportunityActions, SET_OPPORTUNITY } from './opportunity.types';

export const opportunity = (state = [] as Opportunity[], action: OpportunityActions) => {
  switch (action.type) {
    case SET_OPPORTUNITY:
      return action.payload;
    default:
      return state;
  }
};
