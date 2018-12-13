import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Launch } from '../../models/launch';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent {

  @Input() launch: Launch;

}
