import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompaniesPagesModule} from './pages/companies-pages.module';
import {RouterModule} from '@angular/router';
import {CompaniesRoutes} from './companies.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {CompaniesComponent} from './companies.component';
import {ConfirmationService} from 'primeng/api';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {DialogService} from 'primeng/dynamicdialog';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/companies/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [CompaniesComponent],
    imports: [
        CommonModule,
        CompaniesPagesModule,
        RouterModule.forChild(CompaniesRoutes),
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
        SharedModule
    ],
    providers: [
        ConfirmationService,
        DialogService
    ]
})
export class CompaniesModule {
}
