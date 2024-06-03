import {Routes} from '@angular/router';
import {FinancingSourcesHomeComponent} from "./pages/financing-sources-home/financing-sources-home.component";
import {FinancingSourceInfoComponent} from "./pages/financing-source-info/financing-source-info.component";
import {FinancingSourceResolver} from "./core/resolvers/financing-source.resolver";
import {FinancingSourcesResolver} from "./core/resolvers/financing-sources.resolver";

export const FinancingSourcesRoutes: Routes = [
    {
        path: '',
        component: FinancingSourcesHomeComponent,
        resolve: {
            financingSources: FinancingSourcesResolver
        }
    },
    {
        path: 'info/:id',
        component: FinancingSourceInfoComponent,
        resolve: {
            financingSource: FinancingSourceResolver
        }
    }
]
