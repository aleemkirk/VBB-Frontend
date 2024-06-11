export const SET_CAREERS = 'SET_CAREERS';
export const GET_CAREERS = 'GET_CAREERS';
export interface Career {
  id: number;
  name: string;
  description: string;
}

export interface SetCareersAction {
  type: typeof SET_CAREERS;
  payload: Career[];
}

export interface GetCareersAction {
  type: typeof GET_CAREERS;
}

export type CareerActions = SetCareersAction | GetCareersAction;
