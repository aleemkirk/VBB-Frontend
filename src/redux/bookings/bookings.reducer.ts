import {
  BookingActions,
  Bookings,
  SET_LIBRARY_COMPUTER_SLOTS,
  SET_USER_PREFERENCE_SLOTS,
  SET_USER_COMPUTER_RESERVATIONS,
  SET_LIBRARY_STUDENT_PREFERENCE_SLOTS,
} from './bookings.types';

export const initialState = {
  library_slots: [],
  student_preference_slots: [],
  user_reservation_slots: [],
  mentor_preference_slots: [],
  activePreferenceSlot: null,
  activeLibrary: null,
} as Bookings;

export const bookings = (
  state = initialState,
  action: BookingActions
): Bookings => {
  switch (action.type) {
    case SET_LIBRARY_COMPUTER_SLOTS:
      var slot_data: any = action.payload;
      return {
        ...state,
        library_slots: slot_data,
      };
    case SET_USER_PREFERENCE_SLOTS:
      var slot_list_user: any = action.payload;
      return {
        ...state,
        student_preference_slots: slot_list_user,
      };
    case SET_LIBRARY_STUDENT_PREFERENCE_SLOTS:
      var slot_list_lib_student: any = action.payload;
      return {
        ...state,
        student_preference_slots: slot_list_lib_student,
      };
    case SET_USER_COMPUTER_RESERVATIONS:
      var data: any = action.payload;
      return {
        ...state,
        user_reservation_slots: data,
      };
    default:
      return state;
  }
};
