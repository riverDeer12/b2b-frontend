import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {News} from "../../../../../news/core/models/news";

@Injectable({
  providedIn: 'root'
})
export class PublicNewsResolver implements Resolve<News[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> {
        return this.publicService.getNews();
    }
}
