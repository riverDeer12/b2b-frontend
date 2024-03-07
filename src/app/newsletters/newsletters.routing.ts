import {Routes} from '@angular/router';
import {NewslettersHomeComponent} from './pages/newsletters-home/newsletters-home.component';
import {NewsletterEditComponent} from './pages/newsletter-edit/newsletter-edit.component';
import {NewsletterCreateComponent} from './pages/newsletter-create/newsletter-create.component';
import {NewsletterAdditionalContentsResolver} from './core/resolvers/newsletter-additional-contents.resolver';
import {NewsletterAdditionalContentResolver} from "./core/resolvers/newsletter-additional-content.resolver";
import {FreeFormNewslettersComponent} from "./free-form-newsletters/free-form-newsletters.component";

export const NewslettersRoutes: Routes = [
    {
        path: '',
        component: NewslettersHomeComponent,
        resolve: {
            newsletters: NewsletterAdditionalContentsResolver
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
            newsletter: NewsletterAdditionalContentResolver
        }
    },
    {
        path: 'free-form-newsletters',
        component: FreeFormNewslettersComponent,
        loadChildren: () => import('../newsletters/free-form-newsletters/free-form-newsletters.module')
            .then(m => m.FreeFormNewslettersModule)
    },
]
