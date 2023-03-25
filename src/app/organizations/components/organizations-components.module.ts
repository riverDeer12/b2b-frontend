import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsDataTableComponent} from './organizations-data-table/organizations-data-table.component';
import {OrganizationFormComponent} from './organization-form/organization-form.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmationService} from 'primeng/api';
import {ReactiveFormsModule} from '@angular/forms';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/organizations/', '.json');
}

@NgModule({
    declarations: [
        OrganizationsDataTableComponent,
        OrganizationFormComponent
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
        TableModule,
        ConfirmDialogModule,
        RippleModule,
        InputTextModule,
        ReactiveFormsModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        OrganizationsDataTableComponent,
        OrganizationFormComponent
    ]
})
export class OrganizationsComponentsModule {
}
