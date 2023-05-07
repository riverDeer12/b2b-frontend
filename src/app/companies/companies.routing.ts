import {Routes} from '@angular/router';
import {CompanyResolver} from './core/resolvers/company.resolver';
import {CompaniesResolver} from './core/resolvers/companies.resolver';
import {CompaniesHomeComponent} from './pages/companies-home/companies-home.component';
import {CompanyEditComponent} from './pages/company-edit/company-edit.component';
import {CompanyResearchProblemsResolver} from "../research-problems/core/resolvers/company-research-problems.resolver";
import {CategoriesResolver} from '../categories/core/resolvers/categories.resolver';
import {CompanyJobOffersResolver} from '../job-offers/core/resolvers/company-job-offers.resolver';

export const CompaniesRoutes: Routes = [
    {
        path: '',
        component: CompaniesHomeComponent,
        resolve: {
            companies: CompaniesResolver
        }
    },
    {
        path: 'edit/:id',
        component: CompanyEditComponent,
        resolve: {
            company: CompanyResolver,
            categories: CategoriesResolver,
            jobOffers: CompanyJobOffersResolver,
            researchProblems: CompanyResearchProblemsResolver
        }
    }
]
