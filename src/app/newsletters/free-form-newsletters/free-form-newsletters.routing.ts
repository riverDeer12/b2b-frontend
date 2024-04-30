import {Routes} from "@angular/router";
import {
    FreeFormNewslettersHomeComponent
} from "./pages/free-form-newsletters-home/free-form-newsletters-home.component";
import {
    FreeFormNewsletterCreateComponent
} from "./pages/free-form-newsletter-create/free-form-newsletter-create.component";
import {FreeFormNewslettersResolver} from "./core/resolvers/free-form-newsletters.resolver";
import {ScientistsResolver} from "../../scientists/core/resolvers/scientists.resolver";
import {CompaniesResolver} from "../../companies/core/resolvers/companies.resolver";
import {OrganizationsResolver} from "../../organizations/core/resolvers/organizations.resolver";
import {CategoriesResolver} from "../../categories/core/resolvers/categories.resolver";
import {SpecialCategoriesResolver} from "../../special-categories/core/resolvers/special-categories.resolver";

export const FreeFormNewslettersRoutes: Routes = [
    {
        path: '',
        component: FreeFormNewslettersHomeComponent,
        resolve: {
            newsletters: FreeFormNewslettersResolver
        }
    },
    {
        path: 'create',
        component: FreeFormNewsletterCreateComponent,
        resolve:{
            scientists: ScientistsResolver,
            companies: CompaniesResolver,
            organizations: OrganizationsResolver,
            categories: CategoriesResolver,
            specialCategories: SpecialCategoriesResolver
        }
    }
]
