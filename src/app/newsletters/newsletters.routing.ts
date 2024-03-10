import {Routes} from '@angular/router';
import {NewslettersHomeComponent} from './pages/newsletters-home/newsletters-home.component';
import {NewsletterAdditionalContentEditComponent} from './pages/newsletter-additional-content-edit/newsletter-additional-content-edit.component';
import {NewsletterAdditionalContentCreateComponent} from './pages/newsletter-additional-content-create/newsletter-additional-content-create.component';
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
        component: NewsletterAdditionalContentCreateComponent
    },
    {
        path: 'edit/:id',
        component: NewsletterAdditionalContentEditComponent,
        resolve: {
            newsletter: NewsletterAdditionalContentResolver
        }
    },
    {
        path: 'free-form',
        component: FreeFormNewslettersComponent,
        loadChildren: () => import('../newsletters/free-form-newsletters/free-form-newsletters.module')
            .then(m => m.FreeFormNewslettersModule)
    },
]
