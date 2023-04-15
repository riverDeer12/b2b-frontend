import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribersPagesModule} from './pages/subscribers-pages.module';
import {RouterModule} from '@angular/router';
import {SubscribersRoutes} from './subscribers.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {SubscribersComponent} from './subscribers.component';
import {SharedModule} from '../shared/shared.module';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/subscribers/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [
    SubscribersComponent
  ],
    imports: [
        CommonModule,
        SubscribersPagesModule,
        RouterModule.forChild(SubscribersRoutes),
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
export class SubscribersModule {
}
