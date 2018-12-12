import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesPageComponent } from './launches-page/launches-page.component';
import { StatusPageComponent } from './status-page/status-page.component';

const routes: Routes = [
  {
    path: 'launch/:launch',
    component: LaunchesPageComponent
  },
  {
    path: 'status/:status',
    component: StatusPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
