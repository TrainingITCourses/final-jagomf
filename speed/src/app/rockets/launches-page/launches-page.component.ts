import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.css']
})
export class LaunchesPageComponent implements OnInit {

  constructor(
    private globalStore: Store<State>,
    private route: ActivatedRoute
  ) { }

  launch: Launch;

  ngOnInit() {
    const launches$ = this.globalStore.select('launch');
    const routeParams$ = this.route.params;
    forkJoin([routeParams$, launches$])
      .subscribe(([{ launch: launchId }, { launches }]) => {
        this.launch = launches.find(launch => launch.id === launchId);
      });
  }

}
