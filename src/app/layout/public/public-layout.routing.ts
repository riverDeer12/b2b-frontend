import {Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {LatestNewsResolver} from './core/resolvers/latest/latest-news.resolver';
import {LatestCompaniesResolver} from './core/resolvers/latest/latest-companies.resolver';
import {LatestScientistsResolver} from './core/resolvers/latest/latest-scientists.resolver';
import {LatestCompanyResearchProblemsResolver} from './core/resolvers/latest/latest-company-research-problems.resolver';
import {LatestOrganizationResearchProblemsResolver} from './core/resolvers/latest/latest-organization-research-problems.resolver';
import {LatestOrganizationsResolver} from './core/resolvers/latest/latest-organizations.resolver';
import {LatestEquipmentResolver} from './core/resolvers/latest/latest-equipment.resolver';
import {PublicCompaniesComponent} from "./pages/public-companies/public-companies.component";
import {PublicCompaniesResolver} from "./core/resolvers/companies/public-companies.resolver";

export const PublicLayoutRoutes: Routes = [
    {
        path: '',
        component: LandingComponent,
        resolve: {
            latestNews: LatestNewsResolver,
            latestCompanyResearchProblems: LatestCompanyResearchProblemsResolver,
            latestOrganizationResearchProblems: LatestOrganizationResearchProblemsResolver,
            latestCompanies: LatestCompaniesResolver,
            latestScientists: LatestScientistsResolver,
            latestOrganizations: LatestOrganizationsResolver,
            latestEquipment: LatestEquipmentResolver
        }
    },
    {
        path: 'companies',
        component: PublicCompaniesComponent,
        resolve:{
            companies: PublicCompaniesResolver,
        },
        data: {
            public: true
        }
    }
]
