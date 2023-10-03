import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Company} from '../../../../../companies/core/models/company';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {Organization} from "../../../../../organizations/core/models/organization";
import {Scientist} from "../../../../../scientists/core/models/scientist";

@Injectable({
    providedIn: 'root'
})
export class PublicScientistResolver implements Resolve<Scientist> {

    constructor(private publicService: PublicService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scientist> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('/scientists').then();
            return new Observable<Scientist>();
        }

        return this.publicService.getScientist(routeId);
    }
}
