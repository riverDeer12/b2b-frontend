import {Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {LatestNewsResolver} from './core/resolvers/latest/latest-news.resolver';
import {LatestCompaniesResolver} from './core/resolvers/latest/latest-companies.resolver';
import {LatestScientistsResolver} from './core/resolvers/latest/latest-scientists.resolver';
import {LatestCompanyResearchProblemsResolver} from './core/resolvers/latest/latest-company-research-problems.resolver';
import {
    LatestOrganizationResearchProblemsResolver
} from './core/resolvers/latest/latest-organization-research-problems.resolver';
import {LatestOrganizationsResolver} from './core/resolvers/latest/latest-organizations.resolver';
import {LatestEquipmentResolver} from './core/resolvers/latest/latest-equipment.resolver';
import {PublicCompaniesComponent} from "./pages/public-companies/public-companies.component";
import {PublicCompaniesResolver} from "./core/resolvers/companies/public-companies.resolver";
import {PublicOrganizationsResolver} from "./core/resolvers/organizations/public-organizations.resolver";
import {PublicScientistsResolver} from "./core/resolvers/scientists/public-scientists.resolver";
import {PublicNewsResolver} from "./core/resolvers/news/public-news.resolver";
import {PublicNewsComponent} from "./pages/public-news/public-news.component";
import {PublicOrganizationsComponent} from "./pages/public-organizations/public-organizations.component";
import {PublicScientistsComponent} from "./pages/public-scientists/public-scientists.component";
import {MainSearchComponent} from "./pages/main-search/main-search.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {LoginUserComponent} from "../../auth/pages/login-user/login-user.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {EntityDetailsComponent} from "./pages/entity-details/entity-details.component";

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
        path: 'login',
        component: LoginUserComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'main-search',
        component: MainSearchComponent,
        resolve: {
            companies: PublicCompaniesResolver,
        }
    },
    {
        path: 'companies',
        component: PublicCompaniesComponent,
        resolve: {
            companies: PublicCompaniesResolver,
        }
    },
    {
        path: 'scientists',
        component: PublicScientistsComponent,
        resolve: {
            scientists: PublicScientistsResolver,
        }
    },
    {
        path: 'organizations',
        component: PublicOrganizationsComponent,
        resolve: {
            organizations: PublicOrganizationsResolver,
        }
    },
    {
        path: 'news',
        component: PublicNewsComponent,
        resolve: {
            news: PublicNewsResolver,
        }
    },
    {
        path: 'details',
        component: EntityDetailsComponent,

    }
]
