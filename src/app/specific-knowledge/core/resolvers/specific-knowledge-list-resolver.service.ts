import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {SpecificKnowledgeService} from "../services/specific-knowledge.service";
import {SpecificKnowledge} from "../../../scientists/core/models/specific-knowledge/specific-knowledge";

@Injectable({
    providedIn: 'root'
})
export class SpecificKnowledgeListResolver implements Resolve<SpecificKnowledge[]> {

    constructor(private service: SpecificKnowledgeService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpecificKnowledge[]> {
        return this.service.getAllSpecificKnowledge();
    }
}
