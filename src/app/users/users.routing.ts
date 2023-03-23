import {Routes} from '@angular/router';
import {UsersHomeComponent} from './pages/users-home/users-home.component';
import {UsersResolver} from './core/resolvers/users.resolver';

export const UsersRoutes: Routes = [
    {
        path: '',
        component: UsersHomeComponent,
        resolve: {
            users: UsersResolver
        }
    }
]
