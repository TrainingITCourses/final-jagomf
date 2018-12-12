import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Status } from '../../models/status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  @Input() list: any[];

  constructor() { }

  ngOnInit() {
  }

  getStatusLink(status: Status) {
    return ['/rockets', 'status', status.id];
  }

}
