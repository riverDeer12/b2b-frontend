import {Routes} from "@angular/router";
import {
    FreeFormNewslettersHomeComponent
} from "./pages/free-form-newsletters-home/free-form-newsletters-home.component";
import {FreeFormNewsletterEditComponent} from "./pages/free-form-newsletter-edit/free-form-newsletter-edit.component";
import {
    FreeFormNewsletterCreateComponent
} from "./pages/free-form-newsletter-create/free-form-newsletter-create.component";
import {FreeFormNewslettersResolver} from "./core/resolvers/free-form-newsletters.resolver";
import {FreeFormNewsletterResolver} from "./core/resolvers/free-form-newsletter.resolver";

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
        component: FreeFormNewsletterCreateComponent
    },
    {
        path: 'edit/:id',
        component: FreeFormNewsletterEditComponent,
        resolve: {
            newsletter: FreeFormNewsletterResolver
        }
    }
]
