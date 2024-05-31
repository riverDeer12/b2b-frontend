import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {SpecificKnowledge} from '../../../../../specific-knowledge/core/models/specific-knowledge';
import {JobOffer} from '../../../../../job-offers/core/models/job-offer';
import {FinancingSource} from "../../../../../financing-sources/core/models/financing-source";

@Injectable({
  providedIn: 'root'
})
export class PublicFinancingSourcesResolver implements Resolve<FinancingSource[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FinancingSource[]> {
        return this.publicService.getFinancingSources();
    }
}
