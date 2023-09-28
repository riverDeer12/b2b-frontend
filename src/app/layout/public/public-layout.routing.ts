import {Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {LatestNewsResolver} from './core/resolvers/latest-news.resolver';
import {LatestCompaniesResolver} from './core/resolvers/latest-companies.resolver';
import {LatestScientistsResolver} from './core/resolvers/latest-scientists.resolver';
import {LatestCompanyResearchProblemsResolver} from './core/resolvers/latest-company-research-problems.resolver';
import {LatestOrganizationResearchProblemsResolver} from './core/resolvers/latest-organization-research-problems.resolver';
import {LatestOrganizationsResolver} from './core/resolvers/latest-organizations.resolver';
import {LatestEquipmentResolver} from './core/resolvers/latest-equipment.resolver';

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
    }
]
