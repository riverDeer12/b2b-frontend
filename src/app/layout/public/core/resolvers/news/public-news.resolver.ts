import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Company} from '../../../../../companies/core/models/company';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {News} from "../../../../../news/core/models/news";

@Injectable({
    providedIn: 'root'
})
export class PublicNewsResolver implements Resolve<News> {

    constructor(private publicService: PublicService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('/news').then();
            return new Observable<News>();
        }

        return this.publicService.getNews(routeId);
    }
}
