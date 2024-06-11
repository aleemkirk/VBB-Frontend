import { initErrors } from './errors.reducer';

export const SET_ERRORS = 'SET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export type Errors = typeof initErrors;

export interface SetErrorsActionType {
  type: typeof SET_ERRORS;
  payload: Errors;
}

export interface ClearErrorsActionType {
  type: typeof CLEAR_ERRORS;
}

export type ErrorActions = SetErrorsActionType | ClearErrorsActionType;
