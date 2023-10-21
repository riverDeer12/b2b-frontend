import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout.component';
import {TranslateModule} from '@ngx-translate/core';
import {AdminLayoutComponentsModule} from './components/admin-layout-components.module';

@NgModule({
    declarations: [AdminLayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        AdminLayoutComponentsModule,
        TranslateModule
    ]
})
export class AdminLayoutModule {
}
