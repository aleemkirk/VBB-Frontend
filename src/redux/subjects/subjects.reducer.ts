import { SET_SUBJECTS, Subject, SubjectActions } from './subjects.types';

export const subjects = (state = [] as Subject[], action: SubjectActions) => {
  switch (action.type) {
    case SET_SUBJECTS:
      return action.payload;
    default:
      return state;
  }
};
