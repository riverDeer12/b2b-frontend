import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {ConfirmationService} from 'primeng/api';
import {MostPopularEntitiesComponent} from './most-popular-entities/most-popular-entities.component';
import {TabViewModule} from 'primeng/tabview';
import {TranslateModule} from '@ngx-translate/core';
import {ChartModule} from 'primeng/chart';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
    declarations: [
        ActivityListComponent,
        MostPopularEntitiesComponent
    ],
    imports: [
        CommonModule,
        TabViewModule,
        TranslateModule,
        ChartModule,
        FieldsetModule
    ],
    exports: [
        ActivityListComponent,
        MostPopularEntitiesComponent
    ],
    providers: [ConfirmationService]
})
export class ActivitiesComponentsModule {
}
