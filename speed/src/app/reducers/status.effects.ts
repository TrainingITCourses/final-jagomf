import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProviderService } from '../provider.service';
import { StatusActionTypes, StatusesLoaded } from './status.actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class StatusEffects {

  constructor(private actions$: Actions, private provider: ProviderService) {}

  @Effect() save$ = this.actions$.ofType(StatusActionTypes.LoadStatuss).pipe(
    mergeMap(() => this.provider.getStatuses()),
    map(launches => new StatusesLoaded(launches))
  );
}
