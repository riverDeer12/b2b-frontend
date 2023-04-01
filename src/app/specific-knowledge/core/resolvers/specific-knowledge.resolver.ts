import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {SpecificKnowledge} from "../../../scientists/core/models/specific-knowledge/specific-knowledge";
import {SpecificKnowledgeService} from "../services/specific-knowledge.service";

@Injectable({
    providedIn: 'root'
})
export class SpecificKnowledgeResolver implements Resolve<SpecificKnowledge> {

    constructor(private service: SpecificKnowledgeService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpecificKnowledge> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/specific-knowledge').then();
        }

        const scientistId = route.paramMap.get('scientist-id');

        if (!scientistId) {
            this.router.navigateByUrl('admin/specific-knowledge').then();
        }

        return this.service.getSpecificKnowledge(scientistId as string, routeId as string);
    }
}
