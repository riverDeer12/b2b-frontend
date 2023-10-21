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

@NgModule({
    declarations: [
        SubscribersDataTableComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
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
