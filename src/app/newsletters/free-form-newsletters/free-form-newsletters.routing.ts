import {Routes} from "@angular/router";

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
