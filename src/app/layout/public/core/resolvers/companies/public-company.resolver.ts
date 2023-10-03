import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Company} from '../../../../../companies/core/models/company';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";

@Injectable({
    providedIn: 'root'
})
export class PublicCompanyResolver implements Resolve<Company> {

    constructor(private publicService: PublicService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('/companies').then();
            return new Observable<Company>();
        }

        return this.publicService.getCompany(routeId);
    }
}
