import { Action } from '@ngrx/store';
import { StatusActionTypes } from './status.actions';


export interface State {
  statuses: any[];
}

export const initialState: State = {
  statuses: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case StatusActionTypes.LoadStatuss:
      return { ...state };
    default:
      return state;
  }
}
