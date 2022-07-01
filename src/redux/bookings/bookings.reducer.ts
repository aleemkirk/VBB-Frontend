import { BookingActions, Bookings, SET_LIBRARY_COMPUTER_SLOTS, SET_USER_PREFERENCE_SLOTS, SET_LIBRARY_STUDENT_PREFERENCE_SLOTS} from './bookings.types';

export const initialState = {
  library_slots: [],
  student_preference_slots:[],
  mentor_preference_slots:[],
  activePreferenceSlot:null,
  activeLibrary:null,
} as Bookings;

export const bookings = (
  state = initialState,
  action: BookingActions
): Bookings => {
  switch (action.type) {
    case SET_LIBRARY_COMPUTER_SLOTS:
      var slot_data:any = action.payload;
      state.library_slots = slot_data;
      return state;
    case SET_USER_PREFERENCE_SLOTS:
      var slot_list:any = action.payload;
      state.student_preference_slots = slot_list;
      return state;
    case SET_LIBRARY_STUDENT_PREFERENCE_SLOTS:
      var slot_list:any = action.payload;
      state.student_preference_slots = slot_list;
      return state;
    default:
      return state;
  }
};
