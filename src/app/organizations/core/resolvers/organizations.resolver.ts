import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {OrganizationService} from '../services/organization.service';
import {Organization} from '../models/organization';

@Injectable({
    providedIn: 'root'
})
export class OrganizationsResolver implements Resolve<Organization[]> {

    constructor(private service: OrganizationService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization[]> {
        return this.service.getOrganizations();
    }
}
