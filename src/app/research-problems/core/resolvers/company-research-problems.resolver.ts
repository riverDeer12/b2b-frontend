import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ResearchProblem} from "../models/research-problem";
import {ResearchProblemService} from "../services/research-problem.service";
import {EntityType} from "../../../auth/core/enums/entity-type";

@Injectable({
    providedIn: 'root'
})
export class CompanyResearchProblemsResolver implements Resolve<ResearchProblem[]> {

    constructor(private service: ResearchProblemService,
                private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResearchProblem[]> {

        const companyId = route.paramMap.get('id');

        if (!companyId) {
            this.router.navigateByUrl('admin/companies').then();
        }

        return this.service.getResearchProblems(EntityType.Company, companyId as string);
    }
}
