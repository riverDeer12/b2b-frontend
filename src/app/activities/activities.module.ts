import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesPagesModule} from './pages/activities-pages.module';
import {RouterModule} from '@angular/router';
import {ActivitiesRoutes} from './activities.routing';
import {ActivitiesComponent} from './activities.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        ActivitiesComponent
    ],
    imports: [
        CommonModule,
        ActivitiesPagesModule,
        RouterModule.forChild(ActivitiesRoutes),
        TranslateModule
    ]
})
export class ActivitiesModule {
}
