import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ResearchProblem} from '../../../../../research-problems/core/models/research-problem';
import {EntityType} from '../../../../../auth/core/enums/entity-type';
import {environment} from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PublicResearchProblemsResolver implements Resolve<ResearchProblem[]> {

    private publicUrl = environment.apiUrl + '/public/';

    constructor(private http: HttpClient,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResearchProblem[]> {
        const entityType = route.paramMap.get('entityType') as EntityType;

        const companyOrOrganization = entityType == EntityType.Organization || entityType == EntityType.Company;

        if (!companyOrOrganization) {
            this.router.navigateByUrl('/').then();
            return new Observable();
        }

        return this.http.get<ResearchProblem[]>(this.publicUrl + entityType + '/research-problems');
    }
}
