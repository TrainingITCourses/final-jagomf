import { Action } from '@ngrx/store';
import { LaunchActionTypes } from './launch.actions';
import { Launch } from '../models/launch';


export interface State {
  launches: Launch[];
}

export const initialState: State = {
  launches: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunchs:
      return { ...state };
    default:
      return state;
  }
}
