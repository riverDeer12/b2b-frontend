import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ProductsRoutes} from './products.routing';
import {ProductsPagesModule} from './pages/products-pages.module';


@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ProductsRoutes),
        ProductsPagesModule,
        TranslateModule
    ]
})
export class ProductsModule {
}
