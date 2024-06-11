import { LOGOUT, LogoutAction } from '../logout/logout.types';
import { Genre, GenreActions, SET_GENRES } from './genre.types';

export const genres = (
  state = [] as Genre[],
  action: GenreActions | LogoutAction
): Genre[] => {
  switch (action.type) {
    case LOGOUT:
      return [] as Genre[];
    case SET_GENRES:
      return action.payload;
    default:
      return state;
  }
};
