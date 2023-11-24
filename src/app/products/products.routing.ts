import {Routes} from '@angular/router';
import {ProductsHomeComponent} from './pages/products-home/products-home.component';
import {ProductsListResolver} from './core/resolvers/products-list.resolver';
import {ProductEditComponent} from './pages/product-edit/product-edit.component';
import {ProductResolver} from './core/resolvers/product.resolver';

export const ProductsRoutes: Routes = [
    {
        path: '',
        component: ProductsHomeComponent,
        resolve: {
            equipment: ProductsListResolver
        }
    },
    {
        path: 'edit/:company-id/:id',
        component: ProductEditComponent,
        resolve: {
            equipment: ProductResolver
        }
    }
]
