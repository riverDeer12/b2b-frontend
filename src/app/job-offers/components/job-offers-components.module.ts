import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobOffersFormComponent} from './job-offer-form/job-offers-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from '@ngx-translate/core';
import {JobOffersDataTableComponent} from './job-offers-data-table/job-offers-data-table.component';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';
import {RouterModule} from '@angular/router';
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from "primeng/tabview";
import {SharedModule} from '../../shared/shared.module';
import {CustomControlsModule} from '../../custom-controls/custom-controls.module';


@NgModule({
    declarations: [
        JobOffersFormComponent,
        JobOffersDataTableComponent,
    ],
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        ReactiveFormsModule,
        TranslateModule,
        TableModule,
        RippleModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ReactiveFormsModule,
        CategoriesComponentsModule,
        CalendarModule,
        TabViewModule,
        CustomControlsModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        JobOffersFormComponent,
        JobOffersDataTableComponent
    ]
})
export class JobOffersComponentsModule {
}
