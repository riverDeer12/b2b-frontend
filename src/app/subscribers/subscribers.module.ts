import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribersPagesModule} from './pages/subscribers-pages.module';
import {RouterModule} from '@angular/router';
import {SubscribersRoutes} from './subscribers.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SubscribersComponent} from './subscribers.component';
import {SharedModule} from '../shared/shared.module';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/subscribers/', '.json');
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
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule
    ]
})
export class SubscribersModule {
}
