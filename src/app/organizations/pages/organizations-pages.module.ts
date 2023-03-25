import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsHomeComponent} from './organizations-home/organizations-home.component';
import {OrganizationCreateComponent} from './organization-create/organization-create.component';
import {OrganizationEditComponent} from './organization-edit/organization-edit.component';
import {OrganizationsComponentsModule} from '../components/organizations-components.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/organizations/', '.json');
}

@NgModule({
    declarations: [
        OrganizationsHomeComponent,
        OrganizationCreateComponent,
        OrganizationEditComponent
    ],
    imports: [
        CommonModule,
        OrganizationsComponentsModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule,

    ],
    exports: [
        OrganizationsHomeComponent,
        OrganizationCreateComponent,
        OrganizationEditComponent
    ]
})
export class OrganizationsPagesModule {
}
