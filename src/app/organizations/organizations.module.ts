import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {OrganizationsRoutes} from './organizations.routing';
import {RouterModule} from '@angular/router';
import {OrganizationsPagesModule} from './pages/organizations-pages.module';
import {OrganizationsComponent} from './organizations.component';

@NgModule({
    declarations: [OrganizationsComponent],
    imports: [
        CommonModule,
        OrganizationsPagesModule,
        RouterModule.forChild(OrganizationsRoutes),
        TranslateModule,
        SharedModule
    ]
})
export class OrganizationsModule {
}
