import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribersDataTableComponent} from './subscribers-data-table/subscribers-data-table.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {ConfirmationService} from 'primeng/api';

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
        SubscribersDataTableComponent
    ],
    imports: [
        CommonModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule,
        ConfirmDialogModule,
        TableModule,
        RippleModule,
        InputTextModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        SubscribersDataTableComponent
    ]
})
export class SubscribersComponentsModule {
}
