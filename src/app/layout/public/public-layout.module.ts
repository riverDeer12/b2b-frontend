import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicLayoutComponent} from './public-layout.component';
import {RouterModule} from '@angular/router';
import {PublicLayoutRoutes} from './public-layout.routing';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/layouts/public/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [
        PublicLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PublicLayoutRoutes),
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
export class PublicLayoutModule {
}
