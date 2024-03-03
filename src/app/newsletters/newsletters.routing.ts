import {Routes} from '@angular/router';
import {NewslettersHomeComponent} from './pages/newsletters-home/newsletters-home.component';
import {NewsletterEditComponent} from './pages/newsletter-edit/newsletter-edit.component';
import {NewsletterCreateComponent} from './pages/newsletter-create/newsletter-create.component';
import {NewslettersResolver} from './core/resolvers/newsletters.resolver';
import {NewsletterResolver} from "./core/resolvers/newsletter.resolver";
import {FreeFormNewslettersComponent} from "./free-form-newsletters/free-form-newsletters.component";

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
            newsletter: NewsletterResolver
        }
    },
    {
        path: 'free-form-newsletters',
        component: FreeFormNewslettersComponent,
        loadChildren: () => import('../newsletters/free-form-newsletters/free-form-newsletters.module')
            .then(m => m.FreeFormNewslettersModule)
    },
]
