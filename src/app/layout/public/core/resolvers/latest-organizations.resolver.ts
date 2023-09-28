import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LatestService} from '../services/latest.service';
import {Organization} from '../../../../organizations/core/models/organization';

@Injectable({
  providedIn: 'root'
})
export class LatestOrganizationsResolver implements Resolve<Organization[]> {

    constructor(private latestService: LatestService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization[]> {
        return this.latestService.getOrganizations();
    }
}
