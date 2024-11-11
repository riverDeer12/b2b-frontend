import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicLayoutComponent} from './public-layout.component';
import {RouterModule} from '@angular/router';
import {PublicLayoutRoutes} from './public-layout.routing';
import {TranslateModule} from '@ngx-translate/core';
import {PublicLayoutPagesModule} from './pages/public-layout-pages.module';
import {RippleModule} from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';
import {PublicLayoutComponentsModule} from './components/public-layout-components.module';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "primeng/toolbar";

@NgModule({
    declarations: [
        PublicLayoutComponent,
    ],
    exports: [
        PublicLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PublicLayoutRoutes),
        PublicLayoutPagesModule,
        TranslateModule,
        RippleModule,
        StyleClassModule,
        ButtonModule,
        PublicLayoutComponentsModule,
        MenubarModule,
        DropdownModule,
        FormsModule,
        SharedModule,
        ToolbarModule
    ]
})
export class PublicLayoutModule {
}
