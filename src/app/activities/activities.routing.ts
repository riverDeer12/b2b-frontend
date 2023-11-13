import {Routes} from '@angular/router';
import {ActivitiesHomeComponent} from './pages/activities-home/activities-home.component';
import {LastActivitiesResolver} from "./core/resolvers/last-activities.resolver";
import {MostPopularComponent} from './pages/most-popular/most-popular.component';
import {MostPopularResolver} from './core/resolvers/most-popular.resolver';

export const ActivitiesRoutes: Routes = [
    {
        path: '',
        component: ActivitiesHomeComponent,
        resolve:{
            lastActivities: LastActivitiesResolver
        }
    },
    {
        path: 'most-popular',
        component: MostPopularComponent,
        resolve:{
            mostPopular: MostPopularResolver
        }
    }
]
