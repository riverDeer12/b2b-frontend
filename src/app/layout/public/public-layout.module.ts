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

@NgModule({
    declarations: [
        PublicLayoutComponent,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PublicLayoutRoutes),
        PublicLayoutPagesModule,
        TranslateModule,
        RippleModule,
        StyleClassModule,
        ButtonModule,
        PublicLayoutComponentsModule
    ]
})
export class PublicLayoutModule {
}
