import {Injectable} from '@angular/core';
import {
    Router,
    RouterStateSnapshot,
    ActivatedRouteSnapshot, Resolve
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Company} from '../models/company';
import {CompanyService} from '../services/company.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyResolver implements Resolve<Company> {

    private redirectUrl!: string;

    private public!: boolean;

    constructor(private service: CompanyService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {

        this.public = route.data["public"] as boolean;

        this.redirectUrl = this.public ? '/companies' : '/admin/companies';

        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl(this.redirectUrl).then();
        }

        return this.service.getCompany(routeId as string);
    }
}
