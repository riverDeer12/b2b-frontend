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
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {EditorModule} from "primeng/editor";
import {ReactiveFormsModule} from "@angular/forms";
import {ValidationService} from '../../shared/services/validation.service';

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
                defaultLanguage: 'hr',
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
        ConfirmDialogModule,
        EditorModule,
        ReactiveFormsModule
    ],
    providers: [
        ConfirmationService,
        ValidationService
    ],
    exports: [
        NewsFormComponent,
        NewsDataTableComponent
    ]
})
export class NewsComponentsModule {
}
