import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResearchProblemsPagesModule} from "./pages/research-problems-pages.module";
import {ResearchProblemsRoutes} from "./research-problems.routing";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ResearchProblemsRoutes),
        ResearchProblemsPagesModule
    ]
})
export class ResearchProblemsModule {
}
