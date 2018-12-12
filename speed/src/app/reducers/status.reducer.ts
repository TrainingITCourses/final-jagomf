import { StatusActionTypes, StatusActions } from './status.actions';
import { Status } from '../models/status';


export interface State {
  statuses: Status[];
}

export const initialState: State = {
  statuses: []
};

export function reducer(state = initialState, action: StatusActions): State {
  switch (action.type) {
    case StatusActionTypes.LoadStatuss:
      return { ...state };
    case StatusActionTypes.StatusesLoaded:
      return action.payload;
    default:
      return state;
  }
}
