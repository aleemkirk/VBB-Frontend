export const SET_LANGUAGUES = 'SET_LANGUAGUES';
export const GET_LANGUAGUES = 'GET_LANGUAGUES';

export interface Language {
  id: number;
  englishDisplayName: string;
  nameInNativeAlphabet: string;
}
export interface GetLanguagueAction {
  type: typeof GET_LANGUAGUES;
}
export interface SetLanguageAction {
  type: typeof SET_LANGUAGUES;
  payload: Language[];
}

export type LanguagueActions = GetLanguagueAction | SetLanguageAction;
