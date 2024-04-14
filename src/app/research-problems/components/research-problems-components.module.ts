import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    ResearchProblemsDataTableComponent
} from './research-problems-data-table/research-problems-data-table.component';
import {ResearchProblemFormComponent} from './research-problems-form/research-problem-form.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {TranslateModule} from "@ngx-translate/core";
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogService} from 'primeng/dynamicdialog';
import {TabViewModule} from "primeng/tabview";
import {CustomControlsModule} from '../../custom-controls/custom-controls.module';

@NgModule({
    declarations: [
        ResearchProblemsDataTableComponent,
        ResearchProblemFormComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TableModule,
        InputTextModule,
        ConfirmDialogModule,
        RippleModule,
        CategoriesComponentsModule,
        ReactiveFormsModule,
        RadioButtonModule,
        FormsModule,
        TabViewModule,
        CustomControlsModule
    ],
    providers: [
        DialogService
    ],
    exports: [
        ResearchProblemsDataTableComponent,
        ResearchProblemFormComponent
    ]
})
export class ResearchProblemsComponentsModule {
}
