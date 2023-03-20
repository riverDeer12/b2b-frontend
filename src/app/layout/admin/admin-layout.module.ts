import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {CommonModule} from '@angular/common';
import {AdminLayoutPagesModule} from './pages/admin-layout-pages.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        AdminLayoutPagesModule
    ]
})
export class AdminLayoutModule {
}
