import {Routes} from '@angular/router';
import {NewsHomeComponent} from './pages/news-home/news-home.component';
import {NewsEditComponent} from './pages/news-edit/news-edit.component';
import {NewsCreateComponent} from './pages/news-create/news-create.component';
import {NewsResolver} from './core/resolvers/news.resolver';

export const NewsRoutes: Routes = [
    {
        path: '',
        component: NewsHomeComponent,
        // resolve: {
        //     news: NewsListResolver
        // }
    },
    {
        path: 'create',
        component: NewsCreateComponent
    },
    {
        path: 'edit/{id}',
        component: NewsEditComponent,
        resolve: {
            news: NewsResolver
        }
    }
]
