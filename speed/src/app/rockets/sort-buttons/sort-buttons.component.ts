import { Component, Output, EventEmitter } from '@angular/core';

export enum SORT_LAUNCHES { ascending, descending }

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.css']
})
export class SortButtonsComponent {

  @Output() sortChanged: EventEmitter<SORT_LAUNCHES>;

  constructor() {
    this.sortChanged = new EventEmitter();
  }

  sort(order) {
    this.sortChanged.emit(order ? SORT_LAUNCHES.ascending : SORT_LAUNCHES.descending);
  }

}
