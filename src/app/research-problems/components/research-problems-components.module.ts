import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    ResearchProblemsDataTableComponent
} from './research-problems-data-table/research-problems-data-table.component';
import {ResearchProblemsFormComponent} from './research-problems-form/research-problems-form.component';


@NgModule({
    declarations: [
        ResearchProblemsDataTableComponent,
        ResearchProblemsFormComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ResearchProblemsDataTableComponent,
        ResearchProblemsFormComponent
    ]
})
export class ResearchProblemsComponentsModule {
}
