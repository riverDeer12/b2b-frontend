import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Company} from '../models/company';
import {CompanyService} from '../services/company.service';

@Injectable({
    providedIn: 'root'
})
export class CompaniesResolver implements Resolve<Company[]> {

    constructor(private service: CompanyService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company[]> {
        return this.service.getCompanies();
    }
}
