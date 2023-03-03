import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicLayoutComponent} from './public-layout.component';
import {RouterModule} from '@angular/router';
import {PublicLayoutRoutes} from './public-layout.routing';


@NgModule({
    declarations: [
        PublicLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PublicLayoutRoutes)
    ]
})
export class PublicLayoutModule {
}
