import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LoadLaunchs } from '../../reducers/launch.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ActivatedRoute } from '@angular/router';
import { Launch } from '../../models/launch';
import { SORT_LAUNCHES } from '../sort-buttons/sort-buttons.component';
import { TitleService } from '../../title.service';
import { LoadStatuss } from '../../reducers/status.actions';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit, OnDestroy {

  order: SORT_LAUNCHES = SORT_LAUNCHES.ascending;
  launches: Launch[] = [];
  status;
  ngUnsubscribe: Subject<void>;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private titleService: TitleService,
    private globalStore: Store<State>
  ) {
    this.ngUnsubscribe = new Subject();
  }

  ngOnInit() {
    this.loadValues();
    this.observeValues();
  }

  ngOnDestroy() {
    this.finishSubscriptions();
  }

  private finishSubscriptions() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadValues() {
    this.globalStore.dispatch(new LoadStatuss());
    this.globalStore.dispatch(new LoadLaunchs());
  }

  observeValues() {
    const launch$ = this.globalStore.select('launch');
    const status$ = this.globalStore.select('status');
    const routeParams$ = this.route.params;
    combineLatest(launch$, status$, routeParams$).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      ([{ launches }, { statuses }, { status: currentStatusId }]) => {
        this.launches = [ ...launches ];
        this.status = currentStatusId;
        const currentStatus = statuses.find(eachStat => eachStat.id === this.status);
        this.titleService.setTitle(`Estado: ${currentStatus.name}`);
      });
  }

  sorted(order: SORT_LAUNCHES) {
    this.order = order;
  }

}
