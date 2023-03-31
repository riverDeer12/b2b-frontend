import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {ResearchProblem} from "../models/research-problem";
import {ResearchProblemService} from "../services/research-problem.service";

@Injectable({
    providedIn: 'root'
})
export class ResearchProblemsResolver implements Resolve<ResearchProblem[]> {

    constructor(private service: ResearchProblemService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResearchProblem[]> {
        return this.service.getAllResearchProblems();
    }
}
