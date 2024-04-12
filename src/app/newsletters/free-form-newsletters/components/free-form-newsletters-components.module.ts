import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {EditorModule} from "primeng/editor";
import {ReactiveFormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {ValidationService} from "../../../shared/services/validation.service";
import {CustomControlsModule} from "../../../custom-controls/custom-controls.module";
import {FreeFormNewsletterFormComponent} from './free-form-newsletter-form/free-form-newsletter-form.component';
import {
    FreeFormNewsletterDataTableComponent
} from './free-form-newsletter-data-table/free-form-newsletter-data-table.component';
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {SharedModule} from "../../../shared/shared.module";
import {MultiSelectModule} from "primeng/multiselect";
import {CategoriesComponentsModule} from "../../../categories/components/categories-components.module";


@NgModule({
    declarations: [
        FreeFormNewsletterFormComponent,
        FreeFormNewsletterDataTableComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        TranslateModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        ConfirmDialogModule,
        EditorModule,
        ReactiveFormsModule,
        TabViewModule,
        CustomControlsModule,
        CalendarModule,
        CheckboxModule,
        SharedModule,
        MultiSelectModule,
        CategoriesComponentsModule
    ],
    providers: [
        ConfirmationService,
        ValidationService
    ],
    exports: [
        FreeFormNewsletterFormComponent,
        FreeFormNewsletterDataTableComponent
    ]
})
export class FreeFormNewslettersComponentsModule {
}
