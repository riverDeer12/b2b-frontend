import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsFormComponent} from './news-form/news-form.component';
import {NewsDataTableComponent} from './news-data-table/news-data-table.component';
import {TableModule} from 'primeng/table';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
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
        NewsFormComponent,
        NewsDataTableComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        TranslateModule.forChild({
                extend: true,
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient]
                }
            }
        )
    ],
    exports: [
        NewsFormComponent,
        NewsDataTableComponent
    ]
})
export class NewsComponentsModule {
}
