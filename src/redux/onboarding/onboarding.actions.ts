import { ActionType } from './onboarding.types';
import { put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { vbbAPIV1 } from '../../services/api';

export const addTask = () => {
  return {
    type: ActionType.ADD,
  };
};

export const updateOnboardingStep = (payload: Number) => ({
  type: ActionType.COMPLETE_ONBOARDING_STEP,
  payload,
});

export function* watchTaskStep() {
  yield takeEvery(ActionType.COMPLETE_ONBOARDING_STEP, handleTaskStep);
}

function* handleTaskStep() {
  try {
    const url = 'onboarding/';
    const res: AxiosResponse<Number> = yield vbbAPIV1.get<Number>(url);
    if (res.status === 200) {
      yield put(updateOnboardingStep(res.data));
    } else {
      console.error('Error getting Onboarding Steps');
    }
  } catch (e) {
    console.error('Failed to get Onboarding Steps', { e });
  }
}
