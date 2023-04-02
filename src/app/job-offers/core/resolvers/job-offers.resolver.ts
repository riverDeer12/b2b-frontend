import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {JobOfferService} from "../services/job-offer.service";
import {JobOffer} from "../models/job-offer";

@Injectable({
    providedIn: 'root'
})
export class JobOffersResolver implements Resolve<JobOffer[]> {

    constructor(private service: JobOfferService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JobOffer[]> {
        return this.service.getAllJobOffers();
    }
}
