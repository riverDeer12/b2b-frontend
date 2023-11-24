import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsDataTableComponent } from './products-data-table/products-data-table.component';

@NgModule({
    declarations: [
    ProductFormComponent,
    ProductsDataTableComponent
  ],
    imports: [
        CommonModule
    ],
    exports: [
        ProductFormComponent,
        ProductsDataTableComponent
    ]
})
export class ProductsComponentsModule {
}
