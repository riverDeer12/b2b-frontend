import {Routes} from '@angular/router';
import {CategoriesHomeComponent} from "./pages/categories-home/categories-home.component";
import {CategoryCreateComponent} from "./pages/category-create/category-create.component";
import {CategoryEditComponent} from "./pages/category-edit/category-edit.component";
import {CategoriesResolver} from "./core/resolvers/categories.resolver";
import {CategoryResolver} from "./core/resolvers/category.resolver";

export const CategoriesRoutes: Routes = [
    {
        path: '',
        component: CategoriesHomeComponent,
        resolve: {
            categories: CategoriesResolver
        }
    },
    {
        path: 'create',
        component: CategoryCreateComponent,
        resolve: {
            categories: CategoriesResolver
        }
    },
    {
        path: 'edit/:id',
        component: CategoryEditComponent,
        resolve: {
            category: CategoryResolver
        }
    }
]
