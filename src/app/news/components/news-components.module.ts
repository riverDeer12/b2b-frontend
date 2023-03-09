import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsFormComponent} from './news-form/news-form.component';
import {NewsDataTableComponent} from './news-data-table/news-data-table.component';
import {TableModule} from 'primeng/table';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ConfirmationService} from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

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
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient]
                },
                isolate: true
            }
        ),
        InputTextModule,
        ButtonModule,
        RippleModule,
        ConfirmDialogModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        NewsFormComponent,
        NewsDataTableComponent
    ]
})
export class NewsComponentsModule {
}
