import {Routes} from '@angular/router';
import {ScientistsHomeComponent} from './pages/scientists-home/scientists-home.component';
import {ScientistCreateComponent} from './pages/scientist-create/scientist-create.component';
import {ScientistEditComponent} from './pages/scientist-edit/scientist-edit.component';
import {ScientistResolver} from './core/resolvers/scientist.resolver';
import {ScientistsResolver} from './core/resolvers/scientists.resolver';

export const ScientistsRoutes: Routes = [
    {
        path: '',
        component: ScientistsHomeComponent,
        resolve: {
            scientists: ScientistsResolver
        }
    },
    {
        path: 'create',
        component: ScientistCreateComponent
    },
    {
        path: 'edit/:id',
        component: ScientistEditComponent,
        resolve: {
            scientist: ScientistResolver
        }
    }
]
