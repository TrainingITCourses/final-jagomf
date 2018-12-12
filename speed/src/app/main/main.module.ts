import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { StatusListComponent } from './status-list/status-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomePageComponent,
    StatusListComponent
  ]
})
export class MainModule { }
