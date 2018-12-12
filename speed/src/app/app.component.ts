import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'speed';

  constructor(
    private titleService: TitleService,
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.checkNewVersion();
    this.getTitle();
  }

  private getTitle() {
    this.titleService.getTitle().subscribe(title => this.title = title);
  }

  private checkNewVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available! Update?')) {
          window.location.reload();
        }
      });
    }
  }
}
