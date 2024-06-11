export const SET_OPPORTUNITY = 'SET_OPPORTUNITY';
export const GET_OPPORTUNITY = 'GET_OPPORTUNITY';
export interface Opportunity {
  id: number;
  name: string;
  description: string;
}

export interface SetOpportunityAction {
  type: typeof SET_OPPORTUNITY;
  payload: Opportunity[];
}

export interface GetOpportunityAction {
  type: typeof GET_OPPORTUNITY;
}

export type OpportunityActions = SetOpportunityAction | GetOpportunityAction;
