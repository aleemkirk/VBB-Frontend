export const API_REQUEST = 'API_REQUEST';
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
export const API_REQUEST_FAILED = 'API_REQUEST_FAILED';

export const SET_LIBRARY_COMPUTER_SLOTS = 'SET_LIBRARY_COMPUTER_SLOTS';
export const GET_LIBRARY_COMPUTER_SLOTS = 'GET_LIBRARY_COMPUTER_SLOTS';
export const GET_LIBRARY_COMPUTER_SLOTS_SUCCESS =
  'GET_LIBRARY_COMPUTER_SLOTS_SUCCESS';
export const GET_LIBRARY_COMPUTER_SLOTS_FAILED =
  'GET_LIBRARY_COMPUTER_SLOTS_FAILED';

export const CREATE_USER_PREFERENCE_SLOTS = 'SET_LIBRARY_COMPUTER_SLOTS';
export const CREATE_USER_PREFERENCE_SLOT = 'CREATE_USER_PREFERENCE_SLOT';
export const CREATE_USER_PREFERENCE_SLOT_SUCCESS =
  'CREATE_USER_PREFERENCE_SLOT_SUCCESS';
export const CREATE_USER_PREFERENCE_SLOT_FAILED =
  'CREATE_USER_PREFERENCE_SLOT_FAILED';

export const SET_USER_PREFERENCE_SLOTS = 'SET_USER_PREFERENCE_SLOTS';
export const GET_USER_PREFERENCE_SLOTS = 'GET_USER_PREFERENCE_SLOTS';
export const GET_USER_PREFERENCE_SLOTS_SUCCESS =
  'GET_USER_PREFERENCE_SLOTS_SUCCESS';
export const GET_USER_PREFERENCE_SLOTS_SUCCESS_FAILED =
  'GET_USER_PREFERENCE_SLOTS_SUCCESS_FAILED';

export const DELETE_USER_PREFERENCE_SLOT = 'DELETE_USER_PREFERENCE_SLOT';
export const DELETE_USER_PREFERENCE_SLOT_SUCCESS =
  'DELETE_USER_PREFERENCE_SLOT_SUCCESS';
export const DELETE_USER_PREFERENCE_SLOT_FAILED =
  'DELETE_USER_PREFERENCE_SLOT_FAILED';

export const SET_LIBRARY_STUDENT_PREFERENCE_SLOTS =
  'SET_LIBRARY_STUDENT_PREFERENCE_SLOTS';
export const GET_LIBRARY_STUDENT_PREFERENCE_SLOTS =
  'GET_LIBRARY_STUDENT_PREFERENCE_SLOTS';
export const GET_LIBRARY_STUDENT_PREFERENCE_SLOTS_SUCCESS =
  'GET_LIBRARY_STUDENT_PREFERENCE_SLOTS_SUCCESS';
export const GET_LIBRARY_STUDENT_PREFERENCE_SLOTS_FAILED =
  'GET_LIBRARY_STUDENT_PREFERENCE_SLOTS_FAILED';

export const CREATE_COMPUTER_RESERVATION = 'CREATE_COMPUTER_RESERVATION';
export const CREATE_COMPUTER_RESERVATION_SUCCESS =
  'CREATE_COMPUTER_RESERVATION_SUCCESS';
export const CREATE_COMPUTER_RESERVATION_FAILED =
  'CREATE_COMPUTER_RESERVATION_FAILED';

export const SET_USER_COMPUTER_RESERVATIONS = 'SET_USER_COMPUTER_RESERVATIONS';
export const GET_USER_COMPUTER_RESERVATIONS = 'GET_USER_COMPUTER_RESERVATIONS';
export const GET_USER_COMPUTER_RESERVATIONS_SUCCESS =
  'GET_USER_COMPUTER_RESERVATIONS_SUCCESS';
export const GET_USER_COMPUTER_RESERVATIONS_FAILED =
  'GET_USER_COMPUTER_RESERVATIONS_FAILED';

export const UPDATE_USER_COMPUTER_RESERVATION =
  'UPDATE_USER_COMPUTER_RESERVATION';
export const UPDATE_USER_COMPUTER_RESERVATION_SUCCESS =
  'UPDATE_USER_COMPUTER_RESERVATION_SUCCESS';
export const UPDATE_USER_COMPUTER_RESERVATION_FAILED =
  'UPDATE_USER_COMPUTER_RESERVATION_FAILED';

export const UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE =
  'UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE';
export const UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE_SUCCESS =
  'UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE_SUCCESS';
export const UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE_FAILED =
  'UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE_FAILED';

export interface UpdateComputerReservationAttendanceFailedAction {
  type: typeof UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE_FAILED;
  payload: any;
}

export interface UpdateComputerReservationAttendanceSuccessAction {
  type: typeof UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE_SUCCESS;
  payload: any;
}

export interface UpdateComputerReservationAttendanceAction {
  type: typeof UPDATE_USER_COMPUTER_RESERVATION_ATTENDANCE;
  payload: any;
}

export interface SetUserComputerReservationAction {
  type: typeof SET_USER_COMPUTER_RESERVATIONS;
  payload: any;
}

export interface GetUserComputerReservationAction {
  type: typeof GET_USER_COMPUTER_RESERVATIONS;
}

export interface CreateComputerReservationFailedAction {
  type: typeof CREATE_COMPUTER_RESERVATION_FAILED;
  payload: any;
}

export interface CreateComputerReservationSuccessAction {
  type: typeof CREATE_COMPUTER_RESERVATION_SUCCESS;
  payload: any;
}

export interface CreateComputerReservationAction {
  type: typeof CREATE_COMPUTER_RESERVATION;
  payload: any;
}

export interface SetLibraryStudentPreferenceSlotAction {
  type: typeof SET_LIBRARY_STUDENT_PREFERENCE_SLOTS;
  payload: any;
}

export interface GetLibraryStudentPreferenceSlotAction {
  type: typeof GET_LIBRARY_STUDENT_PREFERENCE_SLOTS;
  uniqueID: string;
}

export interface DeleteUserPreferenceResponseSuccessAction {
  type: typeof DELETE_USER_PREFERENCE_SLOT_SUCCESS;
  payload: any;
}

export interface DeleteUserPreferenceSlotAction {
  type: typeof DELETE_USER_PREFERENCE_SLOT;
  payload: any;
}

export interface CreateUserPreferenceResponseSuccessAction {
  type: typeof CREATE_USER_PREFERENCE_SLOT_SUCCESS;
  payload: any;
}

export interface CreateUserPreferenceSlotAction {
  type: typeof CREATE_USER_PREFERENCE_SLOT;
  payload: any;
}

export interface GetLibraryComputerSlotsAction {
  type: typeof GET_LIBRARY_COMPUTER_SLOTS;
  uniqueID: string;
}

export interface SetLibraryComputerSlotsAction {
  type: typeof SET_LIBRARY_COMPUTER_SLOTS;
  payload: any;
}

export interface GetUserPreferenceSlotsAction {
  type: typeof GET_USER_PREFERENCE_SLOTS;
}

export interface SetUserPreferenceSlotsAction {
  type: typeof SET_USER_PREFERENCE_SLOTS;
  payload: any;
}

export interface SetAPIRequest {
  type: typeof API_REQUEST;
  payload: any;
}

export interface SetAPIRequestSuccess {
  type: typeof API_REQUEST_SUCCESS;
  payload: any;
}

export interface SetAPIRequestFailed {
  type: typeof API_REQUEST_FAILED;
  payload: any;
}

export interface Bookings {
  library_slots: any[] | null;
  user_reservation_slots: any[] | null;
  student_preference_slots: any[] | null;
  mentor_preference_slots: any[] | null;
  activePreferenceSlot: any | null;
  activeLibrary: any | null;
}

export type BookingActions =
  | GetUserComputerReservationAction
  | SetUserComputerReservationAction
  | GetLibraryStudentPreferenceSlotAction
  | SetLibraryStudentPreferenceSlotAction
  | DeleteUserPreferenceSlotAction
  | DeleteUserPreferenceResponseSuccessAction
  | SetUserPreferenceSlotsAction
  | GetUserPreferenceSlotsAction
  | CreateUserPreferenceResponseSuccessAction
  | CreateUserPreferenceSlotAction
  | GetLibraryComputerSlotsAction
  | SetLibraryComputerSlotsAction;
