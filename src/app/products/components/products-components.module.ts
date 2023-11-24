import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsDataTableComponent } from './products-data-table/products-data-table.component';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
    ProductFormComponent,
    ProductsDataTableComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        ConfirmDialogModule,
        InputTextModule,
        RippleModule,
        SharedModule,
        TableModule,
        TranslateModule
    ],
    exports: [
        ProductFormComponent,
        ProductsDataTableComponent
    ]
})
export class ProductsComponentsModule {
}
