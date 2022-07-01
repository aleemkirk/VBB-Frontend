export const SET_GENRES = 'SET_GENRES';
export const GET_GENRES = 'GET_GENRES';

export interface Genre {
  id: number;
  name: string;
  description: string;
}

export interface GetGenreAction {
  type: typeof GET_GENRES;
}

export interface SetGenreAction {
  type: typeof SET_GENRES;
  payload: Genre[];
}

export type GenreActions = GetGenreAction | SetGenreAction;
