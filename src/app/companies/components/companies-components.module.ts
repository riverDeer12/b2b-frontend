import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CompaniesDataTableComponent} from './companies-data-table/companies-data-table.component';
import {CompanyFormComponent} from './company-form/company-form.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import {CompanyGeneralFormComponent} from "./company-general-form/company-general-form.component";
import {TabViewModule} from "primeng/tabview";
import {AuthComponentsModule} from "../../auth/components/auth-components.module";
import {ResearchProblemsComponentsModule} from "../../research-problems/components/research-problems-components.module";
import {JobOffersComponentsModule} from '../../job-offers/components/job-offers-components.module';
import {PasswordModule} from 'primeng/password';
import {CategoriesComponentsModule} from '../../categories/components/categories-components.module';
import {ChipsModule} from 'primeng/chips';

@NgModule({
    declarations: [
        CompaniesDataTableComponent,
        CompanyFormComponent,
        CompanyGeneralFormComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TableModule,
        ButtonModule,
        RippleModule,
        ConfirmDialogModule,
        InputTextModule,
        ReactiveFormsModule,
        TabViewModule,
        AuthComponentsModule,
        ResearchProblemsComponentsModule,
        JobOffersComponentsModule,
        PasswordModule,
        CategoriesComponentsModule,
        ChipsModule
    ],
    exports: [
        CompaniesDataTableComponent,
        CompanyFormComponent,
        CompanyGeneralFormComponent
    ]
})
export class CompaniesComponentsModule {
}
