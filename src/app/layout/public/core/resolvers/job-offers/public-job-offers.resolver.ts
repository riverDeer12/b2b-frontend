import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {SpecificKnowledge} from '../../../../../specific-knowledge/core/models/specific-knowledge';
import {JobOffer} from '../../../../../job-offers/core/models/job-offer';

@Injectable({
  providedIn: 'root'
})
export class PublicJobOffersResolver implements Resolve<JobOffer[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JobOffer[]> {
        return this.publicService.getJobOffers();
    }
}
