import {Routes} from '@angular/router';
import {ResearchProblemsHomeComponent} from "./pages/research-problems-home/research-problems-home.component";
import {ResearchProblemCreateComponent} from "./pages/research-problem-create/research-problem-create.component";
import {ResearchProblemEditComponent} from "./pages/research-problem-edit/research-problem-edit.component";
import {ResearchProblemResolver} from "./core/resolvers/research-problem.resolver";
import {ResearchProblemsResolver} from "./core/resolvers/research-problems.resolver";

export const ResearchProblemsRoutes: Routes = [
    {
        path: '',
        component: ResearchProblemsHomeComponent,
        resolve: {
            researchProblems: ResearchProblemsResolver
        }
    },
    {
        path: 'create',
        component: ResearchProblemCreateComponent,
    },
    {
        path: 'edit/:entity-type/:entity-id/:id',
        component: ResearchProblemEditComponent,
        resolve: {
            researchProblem: ResearchProblemResolver
        }
    }
]
