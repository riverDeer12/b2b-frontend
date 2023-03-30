import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResearchProblemsComponentsModule} from "../components/research-problems-components.module";
import {ResearchProblemsHomeComponent} from './research-problems-home/research-problems-home.component';
import {ResearchProblemCreateComponent} from "./research-problem-create/research-problems-create.component";
import {ResearchProblemEditComponent} from "./research-problem-edit/research-problems-edit.component";


@NgModule({
    declarations: [
        ResearchProblemsHomeComponent,
        ResearchProblemCreateComponent,
        ResearchProblemEditComponent
    ],
    imports: [
        CommonModule,
        ResearchProblemsComponentsModule
    ],
    exports: [
        ResearchProblemsHomeComponent,
        ResearchProblemCreateComponent,
        ResearchProblemEditComponent
    ]
})
export class ResearchProblemsPagesModule {
}
