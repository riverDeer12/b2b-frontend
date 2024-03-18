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
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {MyProfileResolver} from './core/resolvers/common/my-profile.resolver';
import {CategoriesResolver} from '../../categories/core/resolvers/categories.resolver';
import {EntityTypeResolver} from './core/resolvers/common/entity-type.resolver';
import {EntityDetailsResolver} from './core/resolvers/common/entity-details.resolver';
import {EntityDetailsComponent} from './pages/entity-details/entity-details.component';
import {PublicCompanyResearchProblemsComponent} from './pages/public-company-research-problems/public-company-research-problems.component';
import {PublicResearchProblemsResolver} from './core/resolvers/research-problems/public-research-problems.resolver';
import {PublicEquipmentComponent} from './pages/public-equipment/public-equipment.component';
import {PublicEquipmentResolver} from './core/resolvers/equipment/public-equipment.resolver';
import {PublicSpecificKnowledgeComponent} from './pages/public-specific-knowledge/public-specific-knowledge.component';
import {PublicSpecificKnowledgeResolver} from './core/resolvers/specific-knowledge/public-specific-knowledge.resolver';
import {PublicJobOffersComponent} from './pages/public-job-offers/public-job-offers.component';
import {PublicJobOffersResolver} from './core/resolvers/job-offers/public-job-offers.resolver';
import {MostPopularResolver} from '../../activities/core/resolvers/most-popular.resolver';
import {PublicMostPopularComponent} from "./pages/public-most-popular/public-most-popular.component";
import {
    PublicOrganizationResearchProblemsComponent
} from "./pages/public-organization-research-problems/public-organization-research-problems.component";
import {PublicProductsComponent} from './pages/public-products/public-products.component';
import {PublicProductsResolver} from './core/resolvers/products/public-products.resolver';
import {PublicOrganizationResolver} from "./core/resolvers/organizations/public-organization.resolver";
import {Scientist} from "../../scientists/core/models/scientist";
import {KeywordResultsComponent} from "./pages/keyword-results/keyword-results.component";
import {KeywordPhraseResolver} from "./core/resolvers/keyword-results/keyword-phrase.resolver";

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
            organizations: PublicOrganizationsResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'companies',
        component: PublicCompaniesComponent,
        resolve: {
            entities: PublicCompaniesResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'companies/job-offers',
        component: PublicJobOffersComponent,
        resolve: {
            jobOffers: PublicJobOffersResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'companies/research-problems',
        component: PublicCompanyResearchProblemsComponent,
        resolve: {
            researchProblems: PublicResearchProblemsResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'companies/products',
        component: PublicProductsComponent,
        resolve: {
            products: PublicProductsResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'scientists',
        component: PublicScientistsComponent,
        resolve: {
            entities: PublicScientistsResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'scientists/equipment',
        component: PublicEquipmentComponent,
        resolve: {
            equipment: PublicEquipmentResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'scientists/specific-knowledge',
        component: PublicSpecificKnowledgeComponent,
        resolve: {
            specificKnowledge: PublicSpecificKnowledgeResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'public-organizations',
        component: PublicOrganizationsComponent,
        resolve: {
            entities: PublicOrganizationsResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'public-organizations/research-problems',
        component: PublicOrganizationResearchProblemsComponent,
        resolve: {
            researchProblems: PublicResearchProblemsResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: 'news',
        component: PublicNewsComponent,
        resolve: {
            entities: PublicNewsListResolver,
            categories: CategoriesResolver
        }
    },
    {
        path: ':entityType/details/:id',
        component: EntityDetailsComponent,
        resolve: {
            entity: EntityDetailsResolver
        }
    },
    {
        path: 'my-profile',
        component: MyProfileComponent,
        resolve: {
            entity: MyProfileResolver,
            categories: CategoriesResolver,
            entityType: EntityTypeResolver
        }
    },
    {
        path: 'most-popular',
        component: PublicMostPopularComponent,
        resolve:{
            mostPopular: MostPopularResolver
        }
    },
    {
        path: 'keyword-search/:keyword-phrase',
        component: KeywordResultsComponent,
        resolve: {
            keywords: KeywordPhraseResolver
        }
    }
]
