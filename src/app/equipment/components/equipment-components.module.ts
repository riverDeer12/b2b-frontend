import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentFormComponent} from './equipment-form/equipment-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from '@ngx-translate/core';
import {EquipmentDataTableComponent} from './equipment-data-table/equipment-data-table.component';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';
import {RouterModule} from '@angular/router';
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";
import {TabViewModule} from "primeng/tabview";
import {CustomControlsModule} from '../../custom-controls/custom-controls.module';

@NgModule({
    declarations: [
        EquipmentFormComponent,
        EquipmentDataTableComponent
    ],
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        ReactiveFormsModule,
        CategoriesComponentsModule,
        TranslateModule,
        TableModule,
        RippleModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ReactiveFormsModule,
        TabViewModule,
        CustomControlsModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        EquipmentFormComponent,
        EquipmentDataTableComponent
    ]
})
export class EquipmentComponentsModule {
}
