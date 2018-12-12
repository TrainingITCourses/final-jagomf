import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadStatuss } from '../../reducers/status.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  statuses: any[];

  constructor(private globalStore: Store<State>) { }

  ngOnInit() {
    this.loadValues();
    this.observeValues();
  }

  loadValues() {
    this.globalStore.dispatch(new LoadStatuss());
  }

  observeValues() {
    this.globalStore.select('status').subscribe(({ statuses }) => {
      this.statuses = [ ...statuses ];
    });
  }

}
