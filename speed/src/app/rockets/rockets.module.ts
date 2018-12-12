import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { StatusPageComponent } from './status-page/status-page.component';
import { LaunchesPageComponent } from './launches-page/launches-page.component';

@NgModule({
  imports: [
    CommonModule,
    RocketsRoutingModule
  ],
  declarations: [StatusPageComponent, LaunchesPageComponent]
})
export class RocketsModule { }
