import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {OrganizationsRoutes} from './organizations.routing';
import {RouterModule} from '@angular/router';
import {OrganizationsPagesModule} from './pages/organizations-pages.module';
import {OrganizationsComponent} from './organizations.component';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/organizations/', '.json');
}

@NgModule({
    declarations: [OrganizationsComponent],
    imports: [
        CommonModule,
        OrganizationsPagesModule,
        RouterModule.forChild(OrganizationsRoutes),
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
    ]
})
export class OrganizationsModule {
}
