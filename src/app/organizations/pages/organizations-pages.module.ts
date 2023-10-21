import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsHomeComponent} from './organizations-home/organizations-home.component';
import {OrganizationCreateComponent} from './organization-create/organization-create.component';
import {OrganizationEditComponent} from './organization-edit/organization-edit.component';
import {OrganizationsComponentsModule} from '../components/organizations-components.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
    declarations: [
        OrganizationsHomeComponent,
        OrganizationCreateComponent,
        OrganizationEditComponent
    ],
    imports: [
        CommonModule,
        OrganizationsComponentsModule,
        TranslateModule,
        SharedModule
    ],
    exports: [
        OrganizationsHomeComponent,
        OrganizationCreateComponent,
        OrganizationEditComponent
    ]
})
export class OrganizationsPagesModule {
}
