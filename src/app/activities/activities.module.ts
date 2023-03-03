import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesPagesModule} from './pages/activities-pages.module';
import {RouterModule} from '@angular/router';
import {ActivitiesRoutes} from './activities.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivitiesPagesModule,
    RouterModule.forChild(ActivitiesRoutes)
  ]
})
export class ActivitiesModule {
}
