import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppMenuitemComponent} from './menu/menu-item/app.menuitem.component';
import {AppTopBarComponent} from './topbar/app.topbar.component';
import {AppFooterComponent} from './footer/app.footer.component';
import {AppMenuComponent} from './menu/app.menu.component';
import {AppSidebarComponent} from './sidebar/app.sidebar.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
    ]
})
export class AdminLayoutComponentsModule {
}
