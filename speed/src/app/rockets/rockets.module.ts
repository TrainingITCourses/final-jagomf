import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { StatusPageComponent } from './status-page/status-page.component';
import { LaunchesPageComponent } from './launches-page/launches-page.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { SortButtonsComponent } from './sort-buttons/sort-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    RocketsRoutingModule
  ],
  declarations: [StatusPageComponent, LaunchesPageComponent, LaunchDetailComponent, LaunchesListComponent, SortButtonsComponent]
})
export class RocketsModule { }
