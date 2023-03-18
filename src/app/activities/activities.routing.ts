import {Routes} from '@angular/router';
import {ActivityCreateComponent} from './pages/activity-create/activity-create.component';
import {ActivityEditComponent} from './pages/activity-edit/activity-edit.component';
import {ActivitiesHomeComponent} from './pages/activities-home/activities-home.component';

export const ActivitiesRoutes: Routes = [
    {
        path: '',
        component: ActivitiesHomeComponent
    },
    {
        path: 'create',
        component: ActivityCreateComponent
    },
    {
        path: 'edit/:id',
        component: ActivityEditComponent
    }
]
