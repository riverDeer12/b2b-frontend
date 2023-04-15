import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {CommonModule} from '@angular/common';
import {HttpBackend} from '@angular/common/http';
import {AdminLayoutComponent} from './admin-layout.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AdminLayoutComponentsModule} from './components/admin-layout-components.module';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translations loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/layouts/admin/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [AdminLayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        AdminLayoutComponentsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
    ]
})
export class AdminLayoutModule {
}
