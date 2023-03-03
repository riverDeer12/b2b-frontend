import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsHomeComponent} from './news-home/news-home.component';
import {NewsCreateComponent} from './news-create/news-create.component';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {NewsComponentsModule} from '../components/news-components.module';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

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
        NewsHomeComponent,
        NewsCreateComponent,
        NewsEditComponent
    ],
    imports: [
        CommonModule,
        NewsComponentsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            extend: true
        })
    ],
    exports: [
        NewsHomeComponent,
        NewsCreateComponent,
        NewsEditComponent
    ]
})
export class NewsPagesModule {
}
