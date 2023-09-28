import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Company} from '../../../../companies/core/models/company';
import {Observable} from 'rxjs';
import {LatestService} from '../services/latest.service';

@Injectable({
  providedIn: 'root'
})
export class LatestCompaniesResolver implements Resolve<Company[]> {

    constructor(private latestService: LatestService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company[]> {
        return this.latestService.getCompanies();
    }
}
