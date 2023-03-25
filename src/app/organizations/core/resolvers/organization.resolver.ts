import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Organization} from '../models/organization';
import {OrganizationService} from '../services/organization.service';

@Injectable({
    providedIn: 'root'
})
export class OrganizationResolver implements Resolve<Organization> {

    constructor(private service: OrganizationService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/organizations').then();
        }

        return this.service.getOrganization(routeId as string);
    }
}
