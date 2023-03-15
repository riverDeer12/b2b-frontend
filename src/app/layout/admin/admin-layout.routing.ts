import {Routes} from '@angular/router';
import {CategoriesComponent} from '../../categories/categories.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../../demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'activities',
        loadChildren: () => import('../../activities/activities.module').then(m => m.ActivitiesModule)
    },
    {
        path: 'news',
        loadChildren: () => import('../../news/news.module').then(m => m.NewsModule)
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        loadChildren: () => import('../../categories/categories.module').then(m => m.CategoriesModule)
    },
    {
        path: 'companies',
        loadChildren: () => import('../../companies/companies.module').then(m => m.CompaniesModule)
    },
    {
        path: 'scientists',
        loadChildren: () => import('../../scientists/scientists.module').then(m => m.ScientistsModule)
    },
    {
        path: 'organizations',
        loadChildren: () => import('../../organizations/organizations.module').then(m => m.OrganizationsModule)
    },
    {
        path: 'users',
        loadChildren: () => import('../../users/users.module').then(m => m.UsersModule)
    },
]
