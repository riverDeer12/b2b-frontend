import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LatestService} from '../../services/latest.service';
import {News} from '../../../../../news/core/models/news';

@Injectable({
  providedIn: 'root'
})
export class LatestNewsResolver implements Resolve<News[]> {

    constructor(private latestService: LatestService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> {
        return this.latestService.getNews();
    }
}
