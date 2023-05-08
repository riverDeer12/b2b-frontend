import {Routes} from '@angular/router';
import {OrganizationsHomeComponent} from './pages/organizations-home/organizations-home.component';
import {OrganizationsResolver} from './core/resolvers/organizations.resolver';
import {OrganizationResolver} from './core/resolvers/organization.resolver';
import {OrganizationEditComponent} from './pages/organization-edit/organization-edit.component';
import {
    OrganizationResearchProblemsResolver
} from "../research-problems/core/resolvers/organization-research-problems.resolver";
import {CategoriesResolver} from '../categories/core/resolvers/categories.resolver';

export const OrganizationsRoutes: Routes = [
    {
        path: '',
        component: OrganizationsHomeComponent,
        resolve: {
            organizations: OrganizationsResolver
        }
    },
    {
        path: 'edit/:id',
        component: OrganizationEditComponent,
        resolve: {
            organization: OrganizationResolver,
            categories: CategoriesResolver,
            researchProblems: OrganizationResearchProblemsResolver
        }
    }
]
