import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {FinancingSource} from "../models/financing-source";
import {FinancingSourceService} from "../services/financing-source.service";

@Injectable({
    providedIn: 'root'
})
export class FinancingSourcesResolver implements Resolve<FinancingSource[]> {

    constructor(private service: FinancingSourceService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FinancingSource[]> {
        return this.service.getFinancingSources();
    }
}
