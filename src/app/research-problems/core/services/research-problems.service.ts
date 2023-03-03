import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Subject} from 'rxjs/internal/Subject';
import {ResearchProblem} from '../models/research-problem';
import {EntityType} from '../../../auth/core/enums/entity-type';

@Injectable({
  providedIn: 'root'
})
export class ResearchProblemsService {

  researchProblemsUrl!: string;
  entityType!: EntityType;
  entityUrl!: string;

  newResearchProblem = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getResearchProblems(entityType: EntityType, entityId: string): Observable<ResearchProblem[]> {

    this.setResearchProblemsUrl(entityType);

    return this.http.get<ResearchProblem[]>(this.researchProblemsUrl + entityId + '/getResearchProblems');
  }

  getResearchProblem(researchProblemId: string, entityId: string, entityType: EntityType) {
    this.setResearchProblemsUrl(entityType);
    return this.http.get<ResearchProblem>(this.researchProblemsUrl + entityId + '/getResearchProblem/' + researchProblemId);
  }

  createResearchProblem(researchProblem: ResearchProblem, entityType: EntityType, entityId: string) {
    this.setResearchProblemsUrl(entityType);
    return this.http.post(this.researchProblemsUrl + entityId + '/createResearchProblem', researchProblem);
  }

  editResearchProblem(researchProblemId: string, entityType: EntityType, researchProblem: ResearchProblem, entityId: string) {
    this.setResearchProblemsUrl(entityType);
    return this.http.post(this.researchProblemsUrl + entityId + '/editResearchProblem/' + researchProblemId, researchProblem);
  }

  flipResearchProblemActive(researchProblemId: string, entityType: EntityType, entityId: string) {
    this.setResearchProblemsUrl(entityType);
    return this.http.post(this.researchProblemsUrl + entityId + '/flipResearchProblemActive/' + researchProblemId, null);
  }

  deleteResearchProblem(researchProblemId: string, entityType: EntityType, entityId: string): any {
    this.setResearchProblemsUrl(entityType);
    return this.http.post(this.researchProblemsUrl + entityId + '/deleteResearchProblem/' + researchProblemId, null);
  }

  pingNewResearchProblem(): void {
    this.newResearchProblem.next({success: true});
  }

  listenNewResearchProblems(): Observable<any> {
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
