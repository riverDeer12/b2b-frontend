import {Routes} from '@angular/router';
import {ScientistsHomeComponent} from './pages/scientists-home/scientists-home.component';
import {ScientistEditComponent} from './pages/scientist-edit/scientist-edit.component';
import {ScientistResolver} from './core/resolvers/scientist.resolver';
import {ScientistsResolver} from './core/resolvers/scientists.resolver';
import {ScientistSpecificKnowledgeResolver} from "../specific-knowledge/core/resolvers/scientist-specific-knowledge.resolver";
import {ScientistEquipmentResolver} from "../equipment/core/resolvers/scientist-equipment.resolver";
import {CategoriesResolver} from "../categories/core/resolvers/categories.resolver";

export const ScientistsRoutes: Routes = [
    {
        path: '',
        component: ScientistsHomeComponent,
        resolve: {
            scientists: ScientistsResolver
        }
    },
    {
        path: 'edit/:id',
        component: ScientistEditComponent,
        resolve: {
            scientist: ScientistResolver,
            specificKnowledge: ScientistSpecificKnowledgeResolver,
            equipment: ScientistEquipmentResolver,
            categories: CategoriesResolver
        }
    }
]
