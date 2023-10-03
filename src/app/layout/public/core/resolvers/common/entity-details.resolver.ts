import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Company} from '../../../../../companies/core/models/company';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";

@Injectable({
    providedIn: 'root'
})
export class EntityDetailsResolver implements Resolve<Company[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company[]> {
        return this.publicService.getCompanies();
    }
}
