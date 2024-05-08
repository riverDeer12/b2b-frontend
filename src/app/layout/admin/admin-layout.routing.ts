import {Routes} from '@angular/router';
import {CategoriesComponent} from '../../categories/categories.component';
import {CompaniesComponent} from '../../companies/companies.component';
import {ScientistsComponent} from '../../scientists/scientists.component';
import {ActivitiesComponent} from '../../activities/activities.component';
import {NewsComponent} from '../../news/news.component';
import {OrganizationsComponent} from '../../organizations/organizations.component';
import {ResearchProblemsComponent} from "../../research-problems/research-problems.component";
import {SpecificKnowledgeComponent} from "../../specific-knowledge/specific-knowledge.component";
import {EquipmentComponent} from "../../equipment/equipment.component";
import {JobOffersComponent} from "../../job-offers/job-offers.component";
import {ClientsComponent} from "../../clients/clients.component";
import {NewslettersComponent} from "../../newsletters/newsletters.component";
import {SpecialCategoriesComponent} from "../../special-categories/special-categories.component";
import {OnboardingComponent} from "../../onboarding/onboarding.component";

export const AdminLayoutRoutes: Routes = [
    {
        path: 'activities',
        component: ActivitiesComponent,
        loadChildren: () => import('../../activities/activities.module').then(m => m.ActivitiesModule)
    },
    {
        path: 'news',
        component: NewsComponent,
        loadChildren: () => import('../../news/news.module').then(m => m.NewsModule)
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        loadChildren: () => import('../../categories/categories.module').then(m => m.CategoriesModule)
    },
    {
        path: 'companies',
        component: CompaniesComponent,
        loadChildren: () => import('../../companies/companies.module').then(m => m.CompaniesModule)
    },
    {
        path: 'scientists',
        component: ScientistsComponent,
        loadChildren: () => import('../../scientists/scientists.module').then(m => m.ScientistsModule)
    },
    {
        path: 'organizations',
        component: OrganizationsComponent,
        loadChildren: () => import('../../organizations/organizations.module').then(m => m.OrganizationsModule)
    },
    {
        path: 'research-problems',
        component: ResearchProblemsComponent,
        loadChildren: () => import('../../research-problems/research-problems.module').then(m => m.ResearchProblemsModule)
    },
    {
        path: 'specific-knowledge',
        component: SpecificKnowledgeComponent,
        loadChildren: () => import('../../specific-knowledge/specific-knowledge.module').then(m => m.SpecificKnowledgeModule)
    },
    {
        path: 'job-offers',
        component: JobOffersComponent,
        loadChildren: () => import('../../job-offers/job-offers.module').then(m => m.JobOffersModule)
    },
    {
        path: 'equipment',
        component: EquipmentComponent,
        loadChildren: () => import('../../equipment/equipment.module').then(m => m.EquipmentModule)
    },
    {
        path: 'clients',
        component: ClientsComponent,
        loadChildren: () => import('../../clients/clients.module').then(m => m.ClientsModule)
    },
    {
        path: 'newsletters',
        component: NewslettersComponent,
        loadChildren: () => import('../../newsletters/newsletters.module').then(m => m.NewslettersModule)
    },
    {
        path: 'special-categories',
        component: SpecialCategoriesComponent,
        loadChildren: () => import('../../special-categories/special-categories.module').then(m => m.SpecialCategoriesModule)
    },
    {
        path: 'onboardings',
        component: OnboardingComponent,
        loadChildren: () => import('../../onboarding/onboarding.module').then(m => m.OnboardingModule)
    }
]
