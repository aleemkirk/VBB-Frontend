import {
  Library,
  LibraryActions,
  SET_LIBRARY,
  SET_LIBRARY_ANNOUNCEMENTS,
  SET_LIBRARY_COMPUTERS,
  SET_LIBRARY_STUDENTS,
  SET_LIBRARY_MENTORS,
  SET_ACTIVE_LIBRARY_USER_PREFERENCE_SLOT,
  SET_ACTIVE_LIBRARY_USER_PREFERENCE_SLOTS,
  SET_ACTIVE_LIBRARY_COMPUTER_RESERVATION,
  SET_ACTIVE_LIBRARY_COMPUTER_RESERVATION_SLOTS,
  SET_LIBRARY_TIME_SLOTS,
  SET_ACTIVE_LIBRARY_TIME_SLOT,

} from './library.types';

export const initialState = {
  announcements: [],
  reservations: [],
  user_preference_slots: [],
  library_slots: [],
  students: [],
  mentors: [],
  computers:[],
  activeUserSlot: null,
  activeComputerReservationSlot: null,
  activeLibrarySlot: null,
  activeLibrary: null,
  activeComputer: null,
  isAcceptingNewMentors: false,
  name:'',
  uniqueID:'',
} as Library;

export const library = (
  state = initialState,
  action: LibraryActions
): Library => {
  switch (action.type) {
    case SET_LIBRARY:
      var data:any = action.payload;
      return {
        ...state,
        activeLibrary: data
      };
    case SET_LIBRARY_ANNOUNCEMENTS:
      var data:any = action.payload;
      return {
        ...state,
        announcements: data
      };
    case SET_LIBRARY_COMPUTERS:
      var data:any = action.payload;
      return {
        ...state,
        computers: data
      };
    case SET_LIBRARY_STUDENTS:
      var data:any = action.payload;
      return {
        ...state,
        students: data
      };

    case SET_LIBRARY_MENTORS:
      var data:any = action.payload;
      return {
        ...state,
        mentors: data
      };

    case SET_ACTIVE_LIBRARY_USER_PREFERENCE_SLOTS:
      var data:any = action.payload;
      return {
        ...state,
        user_preference_slots: data
      };
    case SET_ACTIVE_LIBRARY_COMPUTER_RESERVATION_SLOTS:
      var data:any = action.payload;
      return {
        ...state,
        reservations: data
      };

    case SET_LIBRARY_TIME_SLOTS:
      var data:any = action.payload;
      return {
        ...state,
        library_slots: data
      };

    case SET_ACTIVE_LIBRARY_USER_PREFERENCE_SLOT:
      var data:any = action.payload;
      return {
        ...state,
        activeUserSlot: data
      };


    case SET_ACTIVE_LIBRARY_COMPUTER_RESERVATION:
      var data:any = action.payload;
      return {
        ...state,
        activeComputerReservationSlot: data
      };



    case SET_ACTIVE_LIBRARY_TIME_SLOT:
      var data:any = action.payload;
      return {
        ...state,
        activeLibrarySlot: data
      };
    default:
      return state;
  }
};
