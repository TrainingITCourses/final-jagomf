import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { TitleService } from '../../title.service';
import { LoadLaunchs } from '../../reducers/launch.actions';

@Component({
  selector: 'app-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.css']
})
export class LaunchesPageComponent implements OnInit {

  constructor(
    private globalStore: Store<State>,
    private titleService: TitleService,
    private route: ActivatedRoute
  ) { }

  launch: Launch;

  ngOnInit() {
    this.loadValues();
    this.observeValues();
  }

  loadValues() {
    this.globalStore.dispatch(new LoadLaunchs());
  }

  observeValues() {
    const launches$ = this.globalStore.select('launch');
    const routeParams$ = this.route.params;
    combineLatest(routeParams$, launches$)
      .subscribe(([{ launch: launchId }, { launches }]) => {
        if (launches.length) {
          this.launch = launches.find(launch => launch.id === +launchId);
          this.titleService.setTitle(`Lanzamiento: ${this.launch.name}`);
        }
      });
  }

}
