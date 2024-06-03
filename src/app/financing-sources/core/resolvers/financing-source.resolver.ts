import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {FinancingSource} from "../models/financing-source";
import {FinancingSourceService} from "../services/financing-source.service";

@Injectable({
    providedIn: 'root'
})
export class FinancingSourceResolver implements Resolve<FinancingSource> {

    constructor(private service: FinancingSourceService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FinancingSource> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/financing-sources').then();
        }

        return this.service.getFinancingSource(routeId as string);
    }
}
