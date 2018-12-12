import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunchs = '[Launch] Load Launches',
  LaunchesLoaded = '[Launch] Launches Loaded',
}

export class LoadLaunchs implements Action {
  readonly type = LaunchActionTypes.LoadLaunchs;
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesLoaded;
  constructor(readonly payload: any) {}
}

export type LaunchActions = LoadLaunchs | LaunchesLoaded;
