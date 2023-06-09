import {Routes} from '@angular/router';
import {LoginAdminComponent} from './pages/login-admin/login-admin.component';
import {LoginUserComponent} from './pages/login-user/login-user.component';
import {NotfoundComponent} from '../demo/components/notfound/notfound.component';
import {ForbiddenComponent} from './pages/forbidden/forbidden.component';
import {ErrorComponent} from './pages/error/error.component';
import {DefaultGuard} from '../shared/guards/default.guard';

export const AuthRoutes: Routes = [
    {
        path: 'admin-login',
        component: LoginAdminComponent,
        canActivate: [DefaultGuard]
    },
    {
        path: 'user-login',
        component: LoginUserComponent,
        canActivate: [DefaultGuard]
    },
    {
        path: 'not-found',
        component: NotfoundComponent
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    }
]
