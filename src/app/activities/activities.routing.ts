import {Routes} from '@angular/router';
import {ActivitiesHomeComponent} from './pages/activities-home/activities-home.component';
import {LastActivitiesResolver} from "./core/resolvers/last-activities.resolver";

export const ActivitiesRoutes: Routes = [
    {
        path: '',
        component: ActivitiesHomeComponent,
        resolve:{
            lastActivities: LastActivitiesResolver
        }
    }
]
