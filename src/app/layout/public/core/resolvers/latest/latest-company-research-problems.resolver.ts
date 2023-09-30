import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LatestService} from '../../services/latest.service';
import {ResearchProblem} from '../../../../../research-problems/core/models/research-problem';

@Injectable({
    providedIn: 'root'
})
export class LatestCompanyResearchProblemsResolver implements Resolve<ResearchProblem[]> {

    constructor(private latestService: LatestService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResearchProblem[]> {
        return this.latestService.getCompanyResearchProblems();
    }
}
