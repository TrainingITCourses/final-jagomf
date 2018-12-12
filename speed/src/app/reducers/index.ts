import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromStatus from './status.reducer';
import * as fromLaunch from './launch.reducer';

export interface State {

  status: fromStatus.State;
  launch: fromLaunch.State;
}

export const reducers: ActionReducerMap<State> = {

  status: fromStatus.reducer,
  launch: fromLaunch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
