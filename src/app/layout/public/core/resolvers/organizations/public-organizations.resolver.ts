import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {Organization} from "../../../../../organizations/core/models/organization";

@Injectable({
  providedIn: 'root'
})
export class PublicOrganizationsResolver implements Resolve<Organization[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Organization[]> {
        return this.publicService.getOrganizations();
    }
}
