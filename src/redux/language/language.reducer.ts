import { LOGOUT, LogoutAction } from '../logout/logout.types';
import { Language, LanguagueActions, SET_LANGUAGUES } from './language.types';

export const languages = (
  state = [] as Language[],
  action: LanguagueActions | LogoutAction
): Language[] => {
  switch (action.type) {
    case LOGOUT:
      return [] as Language[];
    case SET_LANGUAGUES:
      return action.payload;
    default:
      return state;
  }
};
