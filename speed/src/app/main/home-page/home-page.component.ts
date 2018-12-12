import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadStatuss } from '../../reducers/status.actions';
import { LoadLaunchs } from '../../reducers/launch.actions';
import { forkJoin } from 'rxjs';
import { Status } from '../../models/status';
import { Launch } from '../../models/launch';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  statuses: Status[];
  launches: Launch[];

  constructor(
    private titleService: TitleService,
    private globalStore: Store<State>
  ) { }

  ngOnInit() {
    this.loadValues();
    this.observeValues();
  }

  loadValues() {
    this.globalStore.dispatch(new LoadStatuss());
    this.globalStore.dispatch(new LoadLaunchs());
  }

  observeValues() {
    const statuses$ = this.globalStore.select('status');
    const launches$ = this.globalStore.select('launch');
    forkJoin([statuses$, launches$]).subscribe(([{ statuses }, { launches }]) => {
      this.statuses = [ ...statuses ];
      this.launches = [ ...launches ];
      this.titleService.setTitle(`Lanzamientos: ${launches.length}`);
    });
  }

}
