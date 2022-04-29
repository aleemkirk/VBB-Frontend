import { ClearErrorsActionType, CLEAR_ERRORS } from './errors.types';

export const clearErrors = (): ClearErrorsActionType => ({
  type: CLEAR_ERRORS,
});
