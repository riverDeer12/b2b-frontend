import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {Organization} from "../../../../../organizations/core/models/organization";

@Injectable({
    providedIn: 'root'
})
export class PublicOrganizationResolver implements Resolve<Organization> {

    constructor(private publicService: PublicService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('/organizations').then();
            return new Observable<Organization>();
        }

        return this.publicService.getOrganization(routeId);
    }
}
