import {Routes} from '@angular/router';
import {SubscribersHomeComponent} from './pages/subscribers-home/subscribers-home.component';
import {SubscribersResolver} from './core/resolvers/subscribers-resolver.service';

export const SubscribersRoutes: Routes = [
    {
        path: '',
        component: SubscribersHomeComponent,
        resolve: {
            subscribers: SubscribersResolver
        }
    }
]
