import { AxiosResponse } from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { vbbAPIV1 } from '../../services/api';
import { GetLibraryStudentPreferenceSlotAction, SetLibraryStudentPreferenceSlotAction, DeleteUserPreferenceSlotAction, DeleteUserPreferenceResponseSuccessAction, SetUserPreferenceSlotsAction, GetUserPreferenceSlotsAction, SetLibraryComputerSlotsAction, GetLibraryComputerSlotsAction, CreateUserPreferenceSlotAction, CreateUserPreferenceResponseSuccessAction, CREATE_USER_PREFERENCE_SLOT, CREATE_USER_PREFERENCE_SLOT_SUCCESS, CREATE_USER_PREFERENCE_SLOT_FAILED, SET_LIBRARY_COMPUTER_SLOTS, GET_LIBRARY_COMPUTER_SLOTS, GET_LIBRARY_COMPUTER_SLOTS_SUCCESS, GET_LIBRARY_COMPUTER_SLOTS_FAILED, GET_USER_PREFERENCE_SLOTS, SET_USER_PREFERENCE_SLOTS
,DELETE_USER_PREFERENCE_SLOT_SUCCESS, DELETE_USER_PREFERENCE_SLOT, SET_LIBRARY_STUDENT_PREFERENCE_SLOTS, GET_LIBRARY_STUDENT_PREFERENCE_SLOTS
,GET_LIBRARY_STUDENT_PREFERENCE_SLOTS_SUCCESS, GET_LIBRARY_STUDENT_PREFERENCE_SLOTS_FAILED} from './bookings.types';
import { apiRequest, apiSuccessful, apiFailed, setAppAlert} from '../app/app.actions';

export const setLibraryComputerSlots = (payload: any): SetLibraryComputerSlotsAction => ({
  type: SET_LIBRARY_COMPUTER_SLOTS,
  payload,
});

// get library computer slots from api
export const getLibraryComputerSlots = (uniqueID:string): GetLibraryComputerSlotsAction => ({
  type: GET_LIBRARY_COMPUTER_SLOTS,
  uniqueID
});

export function* watchGetLibraryComputerSlots() {
  yield takeLatest(GET_LIBRARY_COMPUTER_SLOTS, handleGetLibraryComputerSlots);
}
function* handleGetLibraryComputerSlots(action: GetLibraryComputerSlotsAction) {
  try {

    const uniqueID = action.uniqueID;
    const url = `library-slots/detail/${uniqueID}`;
    const res: AxiosResponse<any> = yield vbbAPIV1.get<any>(url);
    if (res.status === 200) {
      yield put(setLibraryComputerSlots(res.data));
    } else {
      console.error('Error getting library computer slots');
    }
  } catch (e) {
    console.error('Failed to get genres', { e });
  }
}


export const createUserPreferenceSlotSuccess = (payload: any): CreateUserPreferenceResponseSuccessAction => ({
  type: CREATE_USER_PREFERENCE_SLOT_SUCCESS,
  payload,
});


export const createUserPreferenceSlot = (payload:any): CreateUserPreferenceSlotAction => ({
  type: CREATE_USER_PREFERENCE_SLOT,
  payload
});

export function* watchCreateUserPreferenceSlot() {
  yield takeLatest(CREATE_USER_PREFERENCE_SLOT, handleCreateUserPreferenceSlots);
}

function* handleCreateUserPreferenceSlots(action: CreateUserPreferenceSlotAction) {
  try {

    const data = action.payload;
    yield put(apiRequest(action.payload));
    const url = `user-preference-slots/`;
    const res: AxiosResponse<any> = yield vbbAPIV1.post<any>(url, data);
    if (res.status >= 200 && res.status < 300) {
      yield put(apiSuccessful(res.data));
      yield put(createUserPreferenceSlotSuccess(res.data));
      yield put(setAppAlert({alertMsg:'Timeslot created successfully...', alertSeverity:'success'}));
    } else {
      console.error('Error creating user preference slots');
      yield put(apiFailed(res.data));
      yield put(setAppAlert({alertMsg:'Could not create timeslot...', alertSeverity:'error'}));

    }
  } catch (e:any) {
    console.error('Failed to get preference', { e });
    yield put(apiFailed(e.response.data));
    yield put(setAppAlert({alertMsg:'Could not create timeslot...', alertSeverity:'error'}));

  }
}

export const setUserPreferenceSlots = (payload: any): SetUserPreferenceSlotsAction => ({
  type: SET_USER_PREFERENCE_SLOTS,
  payload,
});
// get library computer slots from api
export const getUserPreferenceSlots = (): GetUserPreferenceSlotsAction => ({
  type: GET_USER_PREFERENCE_SLOTS
});

export function* watchGetUserPreferencesSlots() {
  yield takeLatest(GET_USER_PREFERENCE_SLOTS, handleGetUserPreferenceSlots);
}

export function* watchDeleteUserPreferencesSlotsSuccess() {
  yield takeLatest(DELETE_USER_PREFERENCE_SLOT_SUCCESS, handleGetUserPreferenceSlots);
}

function* handleGetUserPreferenceSlots(action: GetUserPreferenceSlotsAction) {
  try {

    const url = `user-preference-slots/`;

    yield put(apiRequest({}));
    const res: AxiosResponse<any> = yield vbbAPIV1.get<any>(url);
    if (res.status >= 200 && res.status < 300) {
      yield put(apiSuccessful(res.data));
      yield put(setUserPreferenceSlots(res.data));
    } else {
      console.error('Error getting user preference slots');
    }
  } catch (e:any) {
    console.error('Failed to get user preference slots', { e });
    yield put(apiFailed(e.response.data));
    // yield put(setAppAlert({alertMsg:'Could not retrieve timeslots...', alertSeverity:'error'}));

  }
}




export const setLibraryStudentSlots = (payload: any): SetLibraryStudentPreferenceSlotAction => ({
  type: SET_LIBRARY_STUDENT_PREFERENCE_SLOTS,
  payload,
});
// get library computer slots from api
export const getLibraryStudentPreferenceSlots = (uniqueID:string): GetLibraryStudentPreferenceSlotAction => ({
  type: GET_LIBRARY_STUDENT_PREFERENCE_SLOTS,
  uniqueID,
});

export function* watchGetLibraryStudentPreferenceSlots () {
  yield takeLatest(GET_LIBRARY_STUDENT_PREFERENCE_SLOTS, handleGetLibraryStudentPreferenceSlots);
}

function* handleGetLibraryStudentPreferenceSlots(action: GetLibraryStudentPreferenceSlotAction) {
  try {

    const url = `library-student-slots/detail/${action.uniqueID}`;

    yield put(apiRequest({}));
    const res: AxiosResponse<any> = yield vbbAPIV1.get<any>(url);
    if (res.status >= 200 && res.status < 300) {
      yield put(apiSuccessful(res.data));
      yield put(setLibraryStudentSlots(res.data));
    } else {
      console.error('Error getting library student preference slots');
    }
  } catch (e:any) {
    console.error('Failed to get library student preference slots', { e });
    yield put(apiFailed(e.response.data));
    yield put(setAppAlert({alertMsg:'Could not retrieve timeslots...', alertSeverity:'error'}));

  }
}







export const deleteUserPreferenceSlotSuccess = (payload: any): DeleteUserPreferenceResponseSuccessAction => ({
  type: DELETE_USER_PREFERENCE_SLOT_SUCCESS,
  payload,
});

export const deleteUserPreferenceSlot = (payload:any): DeleteUserPreferenceSlotAction => ({
  type: DELETE_USER_PREFERENCE_SLOT,
  payload
});

export function* watchDeleteUserPreferenceSlot() {
  yield takeLatest(DELETE_USER_PREFERENCE_SLOT, handleDeleteUserPreferenceSlots);
}

function* handleDeleteUserPreferenceSlots(action: DeleteUserPreferenceSlotAction) {
  try {

    const data = action.payload;
    yield put(apiRequest(action.payload));
    const url = `user-preference-slots/detail/${data}`;
    const res: AxiosResponse<any> = yield vbbAPIV1.delete<any>(url);
    if (res.status >= 200 && res.status < 300) {
      yield put(apiSuccessful(res.data));
      yield put(deleteUserPreferenceSlotSuccess(res.data));
      yield put(setAppAlert({alertMsg:'Timeslot removed successfully...', alertSeverity:'success'}));
    } else {
      console.error('Error deleting user preference slots');
      yield put(apiFailed(res.data));
      yield put(setAppAlert({alertMsg:'Could not create timeslot...', alertSeverity:'error'}));

    }
  } catch (e:any) {
    console.error('Failed to delete preference', { e });
    yield put(apiFailed(e.response.data));
    yield put(setAppAlert({alertMsg:'Could not delete timeslot...', alertSeverity:'error'}));

  }
}
