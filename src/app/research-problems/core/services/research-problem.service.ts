import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Subject} from 'rxjs/internal/Subject';
import {ResearchProblem} from '../models/research-problem';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {Equipment} from '../../../equipment/core/models/equipment';

@Injectable({
    providedIn: 'root'
})
export class ResearchProblemService {

    researchProblemsUrl!: string;

    entityType!: EntityType;

    entityUrl!: string;

    newResearchProblem = new Subject<any>();

    constructor(private http: HttpClient) {
    }

    getAllResearchProblems = () => this.http.get<ResearchProblem[]>(environment.apiUrl + '/research-problems');

    getResearchProblems(entityType: EntityType, entityId: string): Observable<ResearchProblem[]> {

        this.setResearchProblemsUrl(entityType);

        return this.http.get<ResearchProblem[]>(this.researchProblemsUrl + entityId + '/getResearchProblems');
    }

    getResearchProblem(researchProblemId: string, entityType: EntityType, entityId: string) {
        this.setResearchProblemsUrl(entityType);
        return this.http.get<ResearchProblem>(this.researchProblemsUrl + entityId + '/getResearchProblem/' + researchProblemId);
    }

    createResearchProblem(entityType: EntityType, entityId: string, researchProblem: ResearchProblem): Observable<ResearchProblem> {
        this.setResearchProblemsUrl(entityType);
        return this.http.post<ResearchProblem>(this.researchProblemsUrl + entityId + '/createResearchProblem', researchProblem);
    }

    editResearchProblem(researchProblemId: string, entityType: EntityType, entityId: string, researchProblem: ResearchProblem): Observable<ResearchProblem> {
        this.setResearchProblemsUrl(entityType);
        return this.http.post<ResearchProblem>(this.researchProblemsUrl + entityId + '/editResearchProblem/' + researchProblemId, researchProblem);
    }

    flipResearchProblemActive(researchProblemId: string, entityType: EntityType, entityId: string) {
        this.setResearchProblemsUrl(entityType);
        return this.http.post(this.researchProblemsUrl + entityId + '/flipResearchProblemActive/' + researchProblemId, null);
    }

    deleteResearchProblem(researchProblemId: string, entityType: EntityType, entityId: string): any {
        this.setResearchProblemsUrl(entityType);
        return this.http.post(this.researchProblemsUrl + entityId + '/deleteResearchProblem/' + researchProblemId, null);
    }

    /**
     * Push new research problem
     * object to current array of equipment
     * items on UI.
     *
     * @param researchProblem new research problem item.
     */
    pingNewResearchProblem(researchProblem: ResearchProblem): void {
        this.newResearchProblem.next(researchProblem);
    }

    /**
     * Listen to changes
     * on current list of research problem
     * items on UI.
     */
    listenResearchProblems(): Observable<ResearchProblem> {
        return this.newResearchProblem.asObservable();
    }

    setResearchProblemsUrl(entityType: EntityType): void {
        switch (entityType) {
            case EntityType.PublicOrganization:
                this.researchProblemsUrl = environment.apiUrl + '/publicOrganizations/';
                break;
            case EntityType.Company:
                this.researchProblemsUrl = environment.apiUrl + '/companies/';
                break;
        }
    }
}
