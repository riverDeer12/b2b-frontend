import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPagesModule} from './pages/auth-pages.module';
import {AuthRoutes} from './auth.routing';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/auth/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        AuthPagesModule,
        RouterModule.forChild(AuthRoutes),
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
    ]
})
export class AuthModule {
}
