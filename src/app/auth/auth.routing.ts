import {Routes} from '@angular/router';
import {LoginAdminComponent} from './pages/login-admin/login-admin.component';
import {LoginUserComponent} from './pages/login-user/login-user.component';

export const AuthRoutes: Routes = [
    {
        path: 'admin-login',
        component: LoginAdminComponent
    },
    {
        path: 'user-login',
        component: LoginUserComponent
    }
]
