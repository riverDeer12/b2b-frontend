import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {BadgeModule} from 'primeng/badge';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RippleModule} from 'primeng/ripple';
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
