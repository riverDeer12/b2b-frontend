import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Company} from '../models/company';
import {CompanyService} from '../services/company.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyResolver implements Resolve<Company> {

    constructor(private service: CompanyService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/companies').then();
        }

        return this.service.getCompany(routeId as string);
    }
}
