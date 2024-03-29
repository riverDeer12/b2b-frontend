import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesComponentsModule} from '../components/activities-components.module';
import {ActivityCreateComponent} from './activity-create/activity-create.component';
import {ActivitiesHomeComponent} from './activities-home/activities-home.component';
import {ActivityEditComponent} from './activity-edit/activity-edit.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ConfirmationService} from 'primeng/api';
import { MostPopularComponent } from './most-popular/most-popular.component';

@NgModule({
    declarations: [
        ActivitiesHomeComponent,
        ActivityCreateComponent,
        ActivityEditComponent,
        MostPopularComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ActivitiesComponentsModule,
        TranslateModule
    ],
    exports: [
        ActivitiesHomeComponent,
        ActivityCreateComponent,
        ActivityEditComponent,
        MostPopularComponent
    ],
    providers: [ConfirmationService]
})
export class ActivitiesPagesModule {
}
