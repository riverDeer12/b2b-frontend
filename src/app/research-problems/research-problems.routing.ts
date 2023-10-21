import {Routes} from '@angular/router';
import {ResearchProblemsHomeComponent} from "./pages/research-problems-home/research-problems-home.component";
import {ResearchProblemEditComponent} from "./pages/research-problem-edit/research-problem-edit.component";
import {ResearchProblemResolver} from "./core/resolvers/research-problem.resolver";

export const ResearchProblemsRoutes: Routes = [
    {
        path: '',
        component: ResearchProblemsHomeComponent,
        // resolve: {
        //     researchProblems: ResearchProblemsResolver
        // }
    },
    {
        path: 'edit/:entity-type/:entity-id/:id',
        component: ResearchProblemEditComponent,
        resolve: {
            researchProblem: ResearchProblemResolver
        }
    }
]
