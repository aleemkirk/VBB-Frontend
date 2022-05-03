import {
  ClearErrorsActionType,
  CLEAR_ERRORS,
  Errors,
  SetErrorsActionType,
  SET_ERRORS,
} from './errors.types';

export const clearErrors = (): ClearErrorsActionType => ({
  type: CLEAR_ERRORS,
});

export const setErrors = (payload: Errors): SetErrorsActionType => ({
  type: SET_ERRORS,
  payload,
});
