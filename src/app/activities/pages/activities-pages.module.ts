import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesComponentsModule} from '../components/activities-components.module';
import {ActivityCreateComponent} from './activity-create/activity-create.component';
import {ActivitiesHomeComponent} from './activities-home/activities-home.component';
import {ActivityEditComponent} from './activity-edit/activity-edit.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ActivitiesHomeComponent,
    ActivityCreateComponent,
    ActivityEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ActivitiesComponentsModule
  ],
  exports: [
    ActivitiesHomeComponent,
    ActivityCreateComponent,
    ActivityEditComponent
  ]
})
export class ActivitiesPagesModule {
}
