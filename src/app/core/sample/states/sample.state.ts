import { Observable } from 'rxjs/Observable';

export interface ISampleState {
  names: Array<string>;
  forms: Array<string>;
}

export const sampleInitialState: ISampleState = {
  names: <Array<string>>[],
  forms: <Array<string>>[]
};

// selects specific slice from sample state
export function getNames(state$: ISampleState) {
  return state$.names;
  // state$.select(state => state.names);
}

export function getForms(state$: ISampleState) {
  return state$.forms;
    // state$.select(state => state.forms)
}
