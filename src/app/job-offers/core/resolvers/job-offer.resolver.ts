import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {JobOffer} from "../models/job-offer";
import {JobOfferService} from "../services/job-offer.service";

@Injectable({
    providedIn: 'root'
})
export class JobOfferResolver implements Resolve<JobOffer> {

    constructor(private service: JobOfferService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JobOffer> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/job-offers').then();
        }

        const companyId = route.paramMap.get('company-id');

        if (!companyId) {
            this.router.navigateByUrl('admin/job-offers').then();
        }

        return this.service.getJobOffer(companyId as string, routeId as string);
    }
}
