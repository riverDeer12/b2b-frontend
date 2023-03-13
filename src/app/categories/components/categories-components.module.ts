import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryFormComponent} from './category-form/category-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CategoriesDataTableComponent } from './categories-data-table/categories-data-table.component';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';
import { CategoriesSelectorComponent } from './categories-selector/categories-selector.component';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/categories/', '.json');
}

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
        ReactiveFormsModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        TableModule,
        RippleModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ReactiveFormsModule
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
