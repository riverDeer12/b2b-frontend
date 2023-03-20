import {Routes} from '@angular/router';
import {PublicLayoutComponent} from './layout/public/public-layout.component';
import {AdminLayoutComponent} from './layout/admin/pages/admin-layout.component';
import {AdminGuard} from './layout/admin/core/guards/admin.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        loadChildren: () => import('./layout/public/public-layout.module').then(m => m.PublicLayoutModule)
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [AdminGuard],
        loadChildren: () => import('./layout/admin/admin-layout.module').then(m => m.AdminLayoutModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'landing',
        loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: '**', redirectTo: '/auth/notfound'
    }
]
