import {Routes} from '@angular/router';
import {NewslettersHomeComponent} from './pages/newsletters-home/newsletters-home.component';
import {NewsletterEditComponent} from './pages/newsletter-edit/newsletter-edit.component';
import {NewsletterCreateComponent} from './pages/newsletter-create/newsletter-create.component';
import {NewslettersResolver} from './core/resolvers/newsletters.resolver';

export const NewslettersRoutes: Routes = [
    {
        path: '',
        component: NewslettersHomeComponent,
        resolve: {
            news: NewslettersResolver
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
            news: NewslettersResolver
        }
    }
]
