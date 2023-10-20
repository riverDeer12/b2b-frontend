import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {SpecificKnowledge} from '../../../../../specific-knowledge/core/models/specific-knowledge';

@Injectable({
  providedIn: 'root'
})
export class PublicSpecificKnowledgeResolver implements Resolve<SpecificKnowledge[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpecificKnowledge[]> {
        return this.publicService.getSpecificKnowledge();
    }
}
