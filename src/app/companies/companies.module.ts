import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompaniesPagesModule} from './pages/companies-pages.module';
import {RouterModule} from '@angular/router';
import {CompaniesRoutes} from './companies.routing';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {CompaniesComponent} from './companies.component';
import {ConfirmationService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';

@NgModule({
    declarations: [CompaniesComponent],
    imports: [
        CommonModule,
        CompaniesPagesModule,
        RouterModule.forChild(CompaniesRoutes),
        TranslateModule,
        SharedModule
    ],
    providers: [
        ConfirmationService,
        DialogService
    ]
})
export class CompaniesModule {
}
