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
import {CategoriesComponentsModule} from '../../categories/components/categories-components.module';
import {ChipsModule} from 'primeng/chips';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';
import {AuthComponentsModule} from '../../auth/components/auth-components.module';
import { OrganizationGeneralFormComponent } from './organization-general-form/organization-general-form.component';

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
        OrganizationFormComponent,
        OrganizationGeneralFormComponent
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
        ReactiveFormsModule,
        CategoriesComponentsModule,
        ChipsModule,
        PasswordModule,
        TabViewModule,
        AuthComponentsModule
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
