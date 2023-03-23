import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CompaniesDataTableComponent} from './companies-data-table/companies-data-table.component';
import {CompanyFormComponent} from './company-form/company-form.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfirmationService} from 'primeng/api';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/companies/', '.json');
}

@NgModule({
    declarations: [
        CompaniesDataTableComponent,
        CompanyFormComponent
    ],
    imports: [
        CommonModule,
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
        ButtonModule,
        RippleModule,
        ConfirmDialogModule,
        InputTextModule,
        ReactiveFormsModule
    ],
    exports: [
        CompaniesDataTableComponent,
        CompanyFormComponent
    ]
})
export class CompaniesComponentsModule {
}
