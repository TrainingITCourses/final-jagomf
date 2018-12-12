import { Component, OnInit } from '@angular/core';
import { LoadLaunchs } from '../../reducers/launch.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ActivatedRoute } from '@angular/router';
import { Launch } from '../../models/launch';
import { SORT_LAUNCHES } from '../sort-buttons/sort-buttons.component';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit {

  order: SORT_LAUNCHES = SORT_LAUNCHES.ascending;
  launches: Launch[] = [];
  status;

  constructor(
    private route: ActivatedRoute,
    private globalStore: Store<State>
  ) { }

  ngOnInit() {
    this.getStatus();
    this.loadValues();
    this.observeValues();
  }

  getStatus() {
    this.route.params.subscribe(({ status }) => {
      this.status = status;
    });
  }

  loadValues() {
    this.globalStore.dispatch(new LoadLaunchs());
  }

  observeValues() {
    this.globalStore.select('launch').subscribe(({ launches }) => {
      this.launches = [ ...launches ];
    });
  }

  sorted(order: SORT_LAUNCHES) {
    this.order = order;
  }

}
