import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {OrganizationsRoutes} from './organizations.routing';
import {RouterModule} from '@angular/router';
import {OrganizationsPagesModule} from './pages/organizations-pages.module';
import {OrganizationsComponent} from './organizations.component';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/organizations/',
        './assets/i18n/shared/'
    ]);
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
                deps: [HttpBackend]
            },
            isolate: true
        }),
        SharedModule
    ]
})
export class OrganizationsModule {
}
