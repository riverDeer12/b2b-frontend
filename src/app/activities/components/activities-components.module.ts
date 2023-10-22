import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {ConfirmationService} from 'primeng/api';

@NgModule({
    declarations: [
        ActivityListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ActivityListComponent
    ],
    providers: [ConfirmationService]
})
export class ActivitiesComponentsModule {
}
