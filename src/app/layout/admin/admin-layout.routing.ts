import {Routes} from '@angular/router';
import {CategoriesComponent} from '../../categories/categories.component';
import {CompaniesComponent} from '../../companies/companies.component';
import {ScientistsComponent} from '../../scientists/scientists.component';
import {ActivitiesComponent} from '../../activities/activities.component';
import {NewsComponent} from '../../news/news.component';
import {OrganizationsComponent} from '../../organizations/organizations.component';
import {SubscribersComponent} from '../../subscribers/subscribers.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../../demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
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
        path: 'subscribers',
        component: SubscribersComponent,
        loadChildren: () => import('../../subscribers/subscribers.module').then(m => m.SubscribersModule)
    },
]
