import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobOffersFormComponent} from './job-offer-form/job-offers-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {JobOffersDataTableComponent} from './job-offers-data-table/job-offers-data-table.component';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';
import {RouterModule} from '@angular/router';
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/job-offers/', '.json');
}

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
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        TableModule,
        RippleModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ReactiveFormsModule,
        CategoriesComponentsModule
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