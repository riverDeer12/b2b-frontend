import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {ResearchProblem} from '../models/research-problem';
import {ResearchProblemService} from '../services/research-problem.service';
import {EntityType} from '../../../auth/core/enums/entity-type';

@Injectable({
    providedIn: 'root'
})
export class ResearchProblemResolver implements Resolve<ResearchProblem> {

    constructor(private service: ResearchProblemService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResearchProblem> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/research-problems').then();
        }

        const entityId = route.paramMap.get('entity-id');

        if (!entityId) {
            this.router.navigateByUrl('admin/research-problems').then();
        }

        const entityType = route.paramMap.get('entity-type');

        if (!entityType) {
            this.router.navigateByUrl('admin/research-problems').then();
        }

        return this.service.getResearchProblem(entityType as unknown as EntityType, entityId as string, routeId as string);
    }
}
