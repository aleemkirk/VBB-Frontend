export const SET_OPPTY = 'SET_OPPTY';
export const GET_OPPTY = 'GET_OPPTY';
export interface Oppty {
  id: number;
  name: string;
  description: string;
}

export interface SetOpptyAction {
  type: typeof SET_OPPTY;
  payload: Oppty[];
}

export interface GetOpptyAction {
  type: typeof GET_OPPTY;
}

export type OpptyActions = SetOpptyAction | GetOpptyAction;
