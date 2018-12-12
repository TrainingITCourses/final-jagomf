import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'speed';

  constructor(
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.checkNewVersion();
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
