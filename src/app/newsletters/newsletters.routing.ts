import {Routes} from '@angular/router';
import {NewslettersHomeComponent} from './pages/newsletters-home/newsletters-home.component';
import {NewsletterEditComponent} from './pages/newsletter-edit/newsletter-edit.component';
import {NewsletterCreateComponent} from './pages/newsletter-create/newsletter-create.component';
import {NewslettersResolver} from './core/resolvers/newsletters.resolver';
import {FreeFormNewslettersComponent} from "./pages/free-form-newsletters/free-form-newsletters.component";
import {FreeFormNewslettersResolver} from "./core/resolvers/free-form-newsletters.resolver";

export const NewslettersRoutes: Routes = [
    {
        path: '',
        component: NewslettersHomeComponent,
        resolve: {
            newsletters: NewslettersResolver
        }
    },
    {
        path: 'create',
        component: NewsletterCreateComponent
    },
    {
        path: 'edit/:id',
        component: NewsletterEditComponent,
        resolve: {
            newsletter: NewslettersResolver
        }
    },
    {
        path: 'free-form-newsletters',
        component: FreeFormNewslettersComponent,
        resolve: {
            freeFormNewsletters: FreeFormNewslettersResolver
        }
    }
]
