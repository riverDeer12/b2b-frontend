import {Routes} from '@angular/router';
import {EquipmentHomeComponent} from "./pages/equipment-home/equipment-home.component";
import {EquipmentEditComponent} from "./pages/equipment-edit/equipment-edit.component";
import {EquipmentCreateComponent} from "./pages/equipment-create/equipment-create.component";
import {EquipmentListResolver} from "./core/resolvers/equipment-list.resolver";
import {EquipmentResolver} from "./core/resolvers/equipment.resolver";

export const EquipmentRoutes: Routes = [
    {
        path: '',
        component: EquipmentHomeComponent,
        resolve: {
            equipment: EquipmentListResolver
        }
    },
    {
        path: 'create',
        component: EquipmentCreateComponent
    },
    {
        path: 'edit/:scientist-id/:id',
        component: EquipmentEditComponent,
        resolve: {
            equipment: EquipmentResolver
        }
    }
]
