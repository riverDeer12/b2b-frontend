import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppConfigModule} from './components/config/config.module';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {CommonModule} from '@angular/common';
import {AdminLayoutPagesModule} from './pages/admin-layout-pages.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        AppConfigModule,
        AdminLayoutPagesModule
    ]
})
export class AdminLayoutModule {
}
