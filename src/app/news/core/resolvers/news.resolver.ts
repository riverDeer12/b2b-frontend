import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {News} from '../models/news';
import {NewsService} from '../services/news.service';

@Injectable({
    providedIn: 'root'
})
export class NewsResolver implements Resolve<News> {

    constructor(private service: NewsService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/news').then();
        }

        return this.service.getNews(routeId as string);
    }
}
