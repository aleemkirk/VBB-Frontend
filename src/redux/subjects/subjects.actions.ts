import { takeLatest, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { vbbAPIV1 } from '../../services/api';
import {
  GET_SUBJECTS,
  SET_SUBJECTS,
  Subject,
  GetSubjectsAction,
  SetSubjectsAction,
} from './subjects.types';

export const setSubjects = (payload: Subject[]): SetSubjectsAction => ({
  type: SET_SUBJECTS,
  payload,
});

export const getSubjects = (): GetSubjectsAction => ({ type: GET_SUBJECTS });
export function* watchGetSubjects() {
  yield takeLatest(GET_SUBJECTS, handleGetSubjects);
}
function* handleGetSubjects() {
  try {
    const url = 'subjects/';
    const res: AxiosResponse<Subject[]> = yield vbbAPIV1.get<Subject[]>(url);
    if (res.status === 200) {
      yield put(setSubjects(res.data));
    } else {
      console.error('Error getting Subjects');
    }
  } catch (e) {
    console.error('Failed to get Subjects', { e });
  }
}
