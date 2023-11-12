import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesPagesModule} from './pages/activities-pages.module';
import {RouterModule} from '@angular/router';
import {ActivitiesRoutes} from './activities.routing';
import {ActivitiesComponent} from './activities.component';
import {TranslateModule} from '@ngx-translate/core';
import {ConfirmationService} from 'primeng/api';

@NgModule({
    declarations: [
        ActivitiesComponent
    ],
    imports: [
        CommonModule,
        ActivitiesPagesModule,
        RouterModule.forChild(ActivitiesRoutes),
        TranslateModule
    ],
    providers: [ConfirmationService]
})
export class ActivitiesModule {
}
