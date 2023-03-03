import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout.component';
import {AdminLayoutComponentsModule} from '../components/admin-layout-components.module';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {BadgeModule} from 'primeng/badge';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RippleModule} from 'primeng/ripple';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AdminLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AdminLayoutComponentsModule,
        FormsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule
    ],
    exports: [
        AdminLayoutComponent
    ]
})
export class AdminLayoutPagesModule {
}
