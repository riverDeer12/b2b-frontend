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
import {PublicCompaniesComponent} from './pages/public-companies/public-companies.component';
import {PublicCompaniesResolver} from './core/resolvers/companies/public-companies.resolver';
import {PublicOrganizationsResolver} from './core/resolvers/organizations/public-organizations.resolver';
import {PublicScientistsResolver} from './core/resolvers/scientists/public-scientists.resolver';
import {PublicNewsListResolver} from './core/resolvers/news/public-news-list.resolver';
import {PublicNewsComponent} from './pages/public-news/public-news.component';
import {PublicOrganizationsComponent} from './pages/public-organizations/public-organizations.component';
import {PublicScientistsComponent} from './pages/public-scientists/public-scientists.component';
import {MainSearchComponent} from './pages/main-search/main-search.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {LoginUserComponent} from '../../auth/pages/login-user/login-user.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {PublicOrganizationResolver} from './core/resolvers/organizations/public-organization.resolver';
import {PublicScientistResolver} from './core/resolvers/scientists/public-scientist.resolver';
import {PublicCompanyResolver} from './core/resolvers/companies/public-company.resolver';
import {OrganizationDetailsComponent} from './components/details/organization-details/organization-details.component';
import {ScientistDetailsComponent} from './components/details/scientist-details/scientist-details.component';
import {CompanyDetailsComponent} from './components/details/company-details/company-details.component';
import {NewsDetailsComponent} from './components/details/news-details/news-details.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {MyProfileResolver} from './core/resolvers/common/my-profile.resolver';
import {CategoriesResolver} from '../../categories/core/resolvers/categories.resolver';
import {EntityTypeResolver} from './core/resolvers/common/entity-type.resolver';
import {EntityDataViewComponent} from './components/entity-data-view/entity-data-view.component';

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
        component: RegistrationComponent,
        resolve: {
            categories: CategoriesResolver,
        }
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
            scientists: PublicScientistsResolver,
            organizations: PublicOrganizationsResolver
        }
    },
    {
        path: 'companies',
        component: PublicCompaniesComponent,
        children: [
            {
                path: '',
                component: EntityDataViewComponent,
                resolve: {
                    companies: PublicCompaniesResolver
                }
            },
            {
                path: 'details/:id',
                component: CompanyDetailsComponent,
                resolve: {
                    company: PublicCompanyResolver
                }
            }
        ]
    },
    {
        path: 'scientists',
        component: PublicScientistsComponent,
        resolve: {
            scientists: PublicScientistsResolver,
        },
        children: [
            {
                path: 'details/:id',
                component: ScientistDetailsComponent,
                resolve: {
                    company: PublicScientistResolver
                }
            }
        ]
    },
    {
        path: 'organizations',
        component: PublicOrganizationsComponent,
        resolve: {
            organizations: PublicOrganizationsResolver,
        },
        children: [
            {
                path: 'details/:id',
                component: OrganizationDetailsComponent,
                resolve: {
                    company: PublicOrganizationResolver
                }
            }
        ]
    },
    {
        path: 'news',
        component: PublicNewsComponent,
        resolve: {
            news: PublicNewsListResolver,
        },
        children: [
            {
                path: 'details/:id',
                component: NewsDetailsComponent,
                resolve: {
                    company: PublicNewsListResolver
                }
            }
        ]
    },
    {
        path: 'my-profile',
        component: MyProfileComponent,
        resolve: {
            profile: MyProfileResolver,
            categories: CategoriesResolver,
            profileType: EntityTypeResolver
        }
    }
]
