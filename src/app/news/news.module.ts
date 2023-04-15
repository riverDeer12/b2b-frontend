import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NewsRoutes} from './news.routing';
import {NewsPagesModule} from './pages/news-pages.module';
import {NewsComponent} from './news.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/news/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [
        NewsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(NewsRoutes),
        NewsPagesModule,
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
export class NewsModule {
}
