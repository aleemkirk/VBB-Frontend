import { takeLatest, put } from 'redux-saga/effects';
import {
  Opportunity,
  GetOpportunityAction,
  GET_OPPORTUNITY,
  SET_OPPORTUNITY,
  SetOpportunityAction,
} from './opportunity.types';
import { AxiosResponse } from 'axios';
import { vbbAPIV1 } from '../../services/api';

export const setOpportunity = (payload: Opportunity[]): SetOpportunityAction => ({
  type: SET_OPPORTUNITY,
  payload,
});

export const getOpportunity = (): GetOpportunityAction => ({ type: GET_OPPORTUNITY });
export function* watchGetOpportunity() {
  yield takeLatest(GET_OPPORTUNITY, handleGetOpportunity);
}
function* handleGetOpportunity() {
  try {
    const url = 'opportunity/';
    const res: AxiosResponse<Opportunity[]> = yield vbbAPIV1.get<Opportunity[]>(url);
    if (res.status === 200) {
      yield put(setOpportunity(res.data));
    } else {
      console.error('Error getting Opptunities');
    }
  } catch (e) {
    console.error('Failed to get Opptunities', { e });
  }
}
