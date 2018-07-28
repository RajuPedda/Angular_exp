import { Observable } from 'rxjs/Observable';

export interface IMultilingualState {
  lang: string;
}

export const initialState: IMultilingualState = {
  lang: 'en'
};

export function getLang(state$: IMultilingualState) {
  return state$.lang;

  //  state$.select(state => state.lang);
}
