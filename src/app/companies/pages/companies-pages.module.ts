import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompaniesHomeComponent} from './companies-home/companies-home.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CompanyCreateComponent} from './company-create/company-create.component';
import {CompanyEditComponent} from './company-edit/company-edit.component';
import {CompaniesComponentsModule} from '../components/companies-components.module';
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
        CompaniesHomeComponent,
        CompanyCreateComponent,
        CompanyEditComponent
    ],
    imports: [
        CommonModule,
        CompaniesComponentsModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    exports: [
        CompaniesHomeComponent,
        CompanyCreateComponent,
        CompanyEditComponent
    ]
})
export class CompaniesPagesModule {
}
