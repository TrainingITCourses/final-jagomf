import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class StatusEffects {

  constructor(private actions$: Actions) {}
}
