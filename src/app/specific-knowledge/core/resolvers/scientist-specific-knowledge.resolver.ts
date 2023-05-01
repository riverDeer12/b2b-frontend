import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {SpecificKnowledge} from "../models/specific-knowledge";
import {SpecificKnowledgeService} from "../services/specific-knowledge.service";

@Injectable({
    providedIn: 'root'
})
export class ScientistSpecificKnowledgeResolver implements Resolve<SpecificKnowledge[]> {

    constructor(private service: SpecificKnowledgeService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpecificKnowledge[]> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/scientists').then();
        }

        return this.service.getSpecificKnowledgeList(routeId as string);
    }
}
