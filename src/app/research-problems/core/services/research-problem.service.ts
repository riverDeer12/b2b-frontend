import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Subject} from 'rxjs/internal/Subject';
import {ResearchProblem} from '../models/research-problem';
import {EntityType} from '../../../auth/core/enums/entity-type';

/**
 * Service that provides communication between
 * research problems module and endpoints on api
 * which correspond to research problem entity.
 */
@Injectable({
    providedIn: 'root'
})
export class ResearchProblemService {

    researchProblem = new Subject<ResearchProblem>();

    constructor(private http: HttpClient) {
    }

    /**
     * Get all research problems
     * created on platform.
     */
    getAllResearchProblems = () => this.http.get<ResearchProblem[]>(environment.apiUrl + '/research-problems');

    /**
     * Get research problems
     * for selected parent entity.
     *
     * @param parentType type of parent entity.
     * @param parentId parent entity identifier.
     */
    getResearchProblems = (parentType: EntityType, parentId: string) =>
        this.http.get<ResearchProblem[]>(environment.apiUrl + '/' + parentType + '/' + parentId +
            '/getResearchProblems');

    /**
     * Get research problem for
     * selected parent entity.
     *
     * @param parentType type of parent entity.
     * @param parentId parent entity identifier.
     * @param id research problem entity identifier.
     */
    getResearchProblem = (parentType: EntityType, parentId: string, id: string) =>
        this.http.get<ResearchProblem>(environment.apiUrl + '/' + parentType + '/' + parentId +
            '/getResearchProblem/' + id);

    /**
     * Create research problem
     * with form data.
     *
     * @param parentType type of parent entity.
     * @param parentId parent entity identifier.
     * @param postData form data for creating research problem.
     */
    createResearchProblem = (parentType: EntityType, parentId: string, postData: ResearchProblem) =>
        this.http.post<ResearchProblem>(environment.apiUrl + '/' + parentType + '/' + parentId +
            '/createResearchProblem', postData);

    /**
     * Update existing research problem
     * with form data.
     *
     * @param parentType type of parent entity.
     * @param parentId parent entity identifier.
     * @param id research problem entity identifier.
     * @param updateData form data for updating existing research problem.
     */
    editResearchProblem = (parentType: EntityType, parentId: string, id: string, updateData: ResearchProblem) =>
        this.http.post<ResearchProblem>(environment.apiUrl + '/' + parentType + '/' + parentId +
            '/editResearchProblem/' + id, updateData);

    /**
     * Delete research problem for
     * selected parent entity.
     *
     * @param parentType type of parent entity.
     * @param parentId parent entity identifier.
     * @param id research problem entity identifier.
     */
    deleteResearchProblem = (parentType: EntityType, parentId: string, id: string) =>
        this.http.post(environment.apiUrl + '/' + parentType + '/' + parentId +
            '/deleteResearchProblem/' + id, null);

    /**
     * Push new research problem
     * object to current array of equipment
     * items on UI.
     *
     * @param researchProblem new research problem item.
     */
    pingResearchProblems(researchProblem: ResearchProblem): void {
        this.researchProblem.next(researchProblem);
    }

    /**
     * Listen to changes
     * on current list of research problem
     * items on UI.
     */
    listenResearchProblems(): Observable<ResearchProblem> {
        return this.researchProblem.asObservable();
    }
}
