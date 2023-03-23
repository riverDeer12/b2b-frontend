import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesPagesModule} from './pages/activities-pages.module';
import {RouterModule} from '@angular/router';
import {ActivitiesRoutes} from './activities.routing';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    ActivitiesPagesModule,
    RouterModule.forChild(ActivitiesRoutes)
  ]
})
export class ActivitiesModule {
}
