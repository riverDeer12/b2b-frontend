import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompaniesHomeComponent} from './companies-home/companies-home.component';
import {TranslateModule} from '@ngx-translate/core';
import {CompanyCreateComponent} from './company-create/company-create.component';
import {CompanyEditComponent} from './company-edit/company-edit.component';
import {CompaniesComponentsModule} from '../components/companies-components.module';

@NgModule({
    declarations: [
        CompaniesHomeComponent,
        CompanyCreateComponent,
        CompanyEditComponent
    ],
    imports: [
        CommonModule,
        CompaniesComponentsModule,
        TranslateModule
    ],
    exports: [
        CompaniesHomeComponent,
        CompanyCreateComponent,
        CompanyEditComponent
    ]
})
export class CompaniesPagesModule {
}
