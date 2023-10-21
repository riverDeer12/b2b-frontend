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
import {ResearchProblemsComponentsModule} from "../../research-problems/components/research-problems-components.module";

@NgModule({
    declarations: [
        OrganizationsDataTableComponent,
        OrganizationFormComponent,
        OrganizationGeneralFormComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
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
        AuthComponentsModule,
        ResearchProblemsComponentsModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        OrganizationsDataTableComponent,
        OrganizationFormComponent,
        OrganizationGeneralFormComponent
    ]
})
export class OrganizationsComponentsModule {
}
