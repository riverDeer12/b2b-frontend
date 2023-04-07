import {Routes} from '@angular/router';
import {CompanyResolver} from './core/resolvers/company.resolver';
import {CompaniesResolver} from './core/resolvers/companies.resolver';
import {CompaniesHomeComponent} from './pages/companies-home/companies-home.component';
import {CompanyCreateComponent} from './pages/company-create/company-create.component';
import {CompanyEditComponent} from './pages/company-edit/company-edit.component';
import {CompanyResearchProblemsResolver} from "../research-problems/core/resolvers/company-research-problems.resolver";

export const CompaniesRoutes: Routes = [
    {
        path: '',
        component: CompaniesHomeComponent,
        resolve: {
            companies: CompaniesResolver
        }
    },
    {
        path: 'create',
        component: CompanyCreateComponent
    },
    {
        path: 'edit/:id',
        component: CompanyEditComponent,
        resolve: {
            company: CompanyResolver,
            researchProblems: CompanyResearchProblemsResolver
        }
    }
]
