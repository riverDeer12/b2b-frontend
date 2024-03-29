import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryFormComponent} from './category-form/category-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CategoriesDataTableComponent} from './categories-data-table/categories-data-table.component';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';
import {CategoriesSelectorComponent} from './categories-selector/categories-selector.component';
import {RouterModule} from '@angular/router';
import {TabViewModule} from "primeng/tabview";

@NgModule({
    declarations: [
        CategoryFormComponent,
        CategoriesDataTableComponent,
        CategoriesSelectorComponent
    ],
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        ReactiveFormsModule,
        TranslateModule,
        TableModule,
        RippleModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ReactiveFormsModule,
        TabViewModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        CategoryFormComponent,
        CategoriesDataTableComponent,
        CategoriesSelectorComponent
    ]
})
export class CategoriesComponentsModule {
}
