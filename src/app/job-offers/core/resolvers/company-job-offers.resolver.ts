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
export class CompanyJobOffersResolver implements Resolve<JobOffer[]> {

    constructor(private service: JobOfferService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JobOffer[]> {
        const companyId = route.paramMap.get('id');

        if (!companyId) {
            this.router.navigateByUrl('admin/companies').then();
        }

        return this.service.getJobOffers(companyId as string);
    }
}
