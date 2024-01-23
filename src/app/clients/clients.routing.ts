import {Routes} from '@angular/router';
import {ClientsResolver} from "./core/resolvers/clients.resolver";
import {ClientsHomeComponent} from "./pages/clients-home/clients-home.component";

export const ClientsRoutes: Routes = [
    {
        path: '',
        component: ClientsHomeComponent,
        resolve: {
            clients: ClientsResolver
        }
    }
]
