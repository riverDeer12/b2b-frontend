import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AdminLayoutComponent} from './admin-layout.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AdminLayoutComponentsModule} from './components/admin-layout-components.module';

/**
 * Translations loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/layouts/admin/', '.json');
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
                deps: [HttpClient]
            },
            isolate: true
        }),
    ]
})
export class AdminLayoutModule {
}
