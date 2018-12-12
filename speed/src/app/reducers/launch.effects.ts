import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, LoadLaunchs, LaunchesLoaded } from './launch.actions';
import { mergeMap, map } from 'rxjs/operators';
import { ProviderService } from '../provider.service';


@Injectable()
export class LaunchEffects {

  constructor(private actions$: Actions, private provider: ProviderService) {}

  @Effect() save$ = this.actions$.ofType(LaunchActionTypes.LoadLaunchs).pipe(
    mergeMap(() => this.provider.getLaunches()),
    map(launches => new LaunchesLoaded(launches))
  );
}
