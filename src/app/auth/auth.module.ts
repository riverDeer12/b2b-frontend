import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPagesModule} from './pages/auth-pages.module';
import {AuthRoutes} from './auth.routing';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/auth/',
        './assets/i18n/shared/'
    ]);
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
                deps: [HttpBackend]
            },
            isolate: true
        })
    ]
})
export class AuthModule {
}
