import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductsHomeComponent} from './products-home/products-home.component';
import {ProductsComponentsModule} from '../components/products-components.module';


@NgModule({
    declarations: [ProductEditComponent, ProductsHomeComponent],
    imports: [
        CommonModule,
        ProductsComponentsModule
    ],
    exports: [
        ProductEditComponent, ProductsHomeComponent
    ]
})
export class ProductsPagesModule {
}
