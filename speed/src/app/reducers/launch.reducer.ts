import { LaunchActionTypes, LaunchActions } from './launch.actions';
import { Launch } from '../models/launch';


export interface State {
  launches: Launch[];
}

export const initialState: State = {
  launches: []
};

export function reducer(state = initialState, action: LaunchActions): State {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunchs:
      return { ...state };
    case LaunchActionTypes.LaunchesLoaded:
      return { launches: action.payload };
    default:
      return state;
  }
}
