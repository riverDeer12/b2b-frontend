import {Routes} from '@angular/router';
import {SpecialCategoriesHomeComponent} from "./pages/special-categories-home/special-categories-home.component";
import {SpecialCategoriesResolver} from "./core/resolvers/special-categories.resolver";
import {SpecialCategoryResolver} from "./core/resolvers/special-category.resolver";
import {SpecialCategoryEditComponent} from "./pages/special-category-edit/special-category-edit.component";

export const SpecialCategoriesRoutes: Routes = [
    {
        path: '',
        component: SpecialCategoriesHomeComponent,
        resolve: {
            specialCategories: SpecialCategoriesResolver
        }
    },
    {
        path: 'edit/:id',
        component: SpecialCategoryEditComponent,
        resolve: {
            specialCategory: SpecialCategoryResolver
        }
    }
]
