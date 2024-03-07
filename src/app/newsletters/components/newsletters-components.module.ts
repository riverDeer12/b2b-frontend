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
import {ValidationService} from '../../shared/services/validation.service';
import {TabViewModule} from "primeng/tabview";
import {CustomControlsModule} from '../../custom-controls/custom-controls.module';
import {CalendarModule} from "primeng/calendar";
import {
    NewsletterAdditionalContentFormComponent
} from "./newsletter-additional-content-form/newsletter-additional-content-form.component";
import {
    NewsletterAdditionalContentsDataTableComponent
} from "./newsletter-additional-contents-data-table/newsletter-additional-contents-data-table.component";


@NgModule({
    declarations: [
        NewsletterAdditionalContentFormComponent,
        NewsletterAdditionalContentsDataTableComponent
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
        CalendarModule
    ],
    providers: [
        ConfirmationService,
        ValidationService
    ],
    exports: [
        NewsletterAdditionalContentFormComponent,
        NewsletterAdditionalContentsDataTableComponent
    ]
})
export class NewslettersComponentsModule {
}
