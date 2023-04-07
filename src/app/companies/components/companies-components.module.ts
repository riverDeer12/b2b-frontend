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
import {CompanyGeneralFormComponent} from "../company-general-form/company-general-form.component";
import {TabViewModule} from "primeng/tabview";
import {AuthComponentsModule} from "../../auth/components/auth-components.module";
import {ResearchProblemsComponentsModule} from "../../research-problems/components/research-problems-components.module";

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
        CompanyFormComponent,
        CompanyGeneralFormComponent
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
        ReactiveFormsModule,
        TabViewModule,
        AuthComponentsModule,
        ResearchProblemsComponentsModule
    ],
    exports: [
        CompaniesDataTableComponent,
        CompanyFormComponent,
        CompanyGeneralFormComponent
    ]
})
export class CompaniesComponentsModule {
}
