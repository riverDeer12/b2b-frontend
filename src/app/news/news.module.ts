import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NewsRoutes} from './news.routing';
import {NewsPagesModule} from './pages/news-pages.module';
import {NewsComponent} from './news.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/news/', '.json');
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
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule
    ]
})
export class NewsModule {
}
