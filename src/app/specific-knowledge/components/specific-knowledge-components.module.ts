import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecificKnowledgeFormComponent} from './specific-knowledge-form/specific-knowledge-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from '@ngx-translate/core';
import {
    SpecificKnowledgeDataTableComponent
} from './specific-knowledge-data-table/specific-knowledge-data-table.component';
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
        SpecificKnowledgeFormComponent,
        SpecificKnowledgeDataTableComponent,
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
        CategoriesComponentsModule,
        TabViewModule,
        CustomControlsModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        SpecificKnowledgeFormComponent,
        SpecificKnowledgeDataTableComponent,
    ]
})
export class SpecificKnowledgeComponentsModule {
}
