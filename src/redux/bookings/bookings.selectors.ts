import { AppState } from '../rootReducer';
import { initialState } from './bookings.reducer';

const selectBookingState = (state: AppState) => state.bookings || initialState;

export const selectLibrarySlots = (state: AppState) => state.bookings.library_slots;
