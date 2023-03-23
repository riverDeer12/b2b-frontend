import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompaniesPagesModule} from './pages/companies-pages.module';
import {RouterModule} from '@angular/router';
import {CompaniesRoutes} from './companies.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CompaniesComponent} from './companies.component';
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
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule
    ],
    providers: [
        ConfirmationService
    ]
})
export class CompaniesModule {
}
