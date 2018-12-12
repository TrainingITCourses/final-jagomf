import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from '../../models/launch';
import { SORT_LAUNCHES } from '../sort-buttons/sort-buttons.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent {

  @Input() list: Launch[];
  @Input() status: number;
  @Input() sort: SORT_LAUNCHES = SORT_LAUNCHES.ascending;

  get filteredList() {
    return this.list
      .filter(launch => launch.status === this.status)
      .sort((itemA, itemB) => {
        const dateA = new Date(itemA.net).getTime();
        const dateB = new Date(itemB.net).getTime();
        return this.sort === SORT_LAUNCHES.ascending ? dateA - dateB : dateB - dateA;
      });
  }

  getLaunchLink(launch: Launch) {
    return ['/rockets', 'launch', launch.id];
  }

}
