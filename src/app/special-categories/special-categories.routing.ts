import {Routes} from '@angular/router';
import {SpecialCategoriesHomeComponent} from "./pages/special-categories-home/special-categories-home.component";
import {SpecialCategoriesResolver} from "./core/resolvers/special-categories.resolver";
import {SpecialCategoryResolver} from "./core/resolvers/special-category.resolver";
import {SpecialCategoryEditComponent} from "./pages/special-category-edit/special-category-edit.component";
import {SpecialCategoryCreateComponent} from "./pages/special-category-create/special-category-create.component";
import {CompaniesResolver} from "../companies/core/resolvers/companies.resolver";
import {ScientistsResolver} from "../scientists/core/resolvers/scientists.resolver";
import {OrganizationsResolver} from "../organizations/core/resolvers/organizations.resolver";

export const SpecialCategoriesRoutes: Routes = [
    {
        path: '',
        component: SpecialCategoriesHomeComponent,
        resolve: {
            specialCategories: SpecialCategoriesResolver
        }
    },
    {
        path: 'create',
        component: SpecialCategoryCreateComponent,
        resolve: {
            scientists: ScientistsResolver,
            companies: CompaniesResolver,
            organizations: OrganizationsResolver
        }
    },
    {
        path: 'edit/:id',
        component: SpecialCategoryEditComponent,
        resolve: {
            specialCategory: SpecialCategoryResolver,
            scientists: ScientistsResolver,
            companies: CompaniesResolver,
            organizations: OrganizationsResolver
        }
    }
]
