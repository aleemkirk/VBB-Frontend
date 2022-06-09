export const SET_SUBJECTS = 'SET_SUBJECTS';
export const GET_SUBJECTS = 'GET_SUBJECTS';

export interface Subject {
  id: number;
  name: string;
  description: string;
}

export interface GetSubjectsAction {
  type: typeof GET_SUBJECTS;
}

export interface SetSubjectsAction {
  type: typeof SET_SUBJECTS;
  payload: Subject[];
}

export type SubjectActions = GetSubjectsAction | SetSubjectsAction;
