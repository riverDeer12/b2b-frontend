import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivityListComponent} from './activity-list/activity-list.component';

@NgModule({
  declarations: [
    ActivityListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActivityListComponent
  ]
})
export class ActivitiesComponentsModule {
}
