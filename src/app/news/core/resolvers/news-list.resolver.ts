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
export class NewsListResolver implements Resolve<News[]> {

    constructor(private service: NewsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> {
        return this.service.getNewsList();
    }
}
