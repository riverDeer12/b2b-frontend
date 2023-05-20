import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/internal/Subject';
import {environment} from 'src/environments/environment';
import {SpecificKnowledge} from '../models/specific-knowledge';

/**
 * Service that provides communication between
 * specific knowledge module and endpoints on api
 * which correspond to specific knowledge entity.
 */
@Injectable({
    providedIn: 'root'
})
export class SpecificKnowledgeService {

    endpointUrl = environment.apiUrl + '/scientists/';

    specificKnowledge = new Subject<SpecificKnowledge>();

    constructor(private http: HttpClient) {
    }

    /**
     * Get all specific knowledge
     * data stored on platform.
     */
    getAllSpecificKnowledge = () =>
        this.http.get<SpecificKnowledge[]>(this.endpointUrl + '/getSpecificKnowledge');

    /**
     * Get specific knowledge
     * data for selected scientist.
     *
     * @param scientistId id of selected scientist.
     */
    getSpecificKnowledgeList = (scientistId: string) =>
        this.http.get<SpecificKnowledge[]>(this.endpointUrl + scientistId + '/getSpecificKnowledge');

    /**
     * Get data for selected
     * scientist's specific knowledge.
     *
     * @param scientistId id of selected scientist.
     * @param specificKnowledgeId id of selected specific knowledge.
     */
    getSpecificKnowledge = (scientistId: string, specificKnowledgeId: string) =>
        this.http.get<SpecificKnowledge>(this.endpointUrl + scientistId + '/getSpecificKnowledge/'
            + specificKnowledgeId);

    /**
     * Create new specific knowledge
     * data for scientist.
     *
     * @param scientistId id of selected scientist.
     * @param data data for creating specific knowledge.
     */
    createSpecificKnowledge = (scientistId: string, data: SpecificKnowledge) =>
        this.http.post<SpecificKnowledge>(this.endpointUrl + scientistId
            + '/createSpecificKnowledge', data);

    /**
     * Update existing scientist's specific
     * knowledge data with new data.
     *
     * @param scientistId id of selected scientist.
     * @param specificKnowledgeId id of selected specific knowledge.
     * @param data data for creating specific knowledge.
     */
    editSpecificKnowledge = (scientistId: string, specificKnowledgeId: string, data: SpecificKnowledge) =>
        this.http.post<SpecificKnowledge>(this.endpointUrl + scientistId + '/editSpecificKnowledge/'
            + specificKnowledgeId, data);

    /**
     * Delete existing scientist's specific
     * knowledge data.
     *
     * @param scientistId id of selected scientist.
     * @param specificKnowledgeId id of selected specific knowledge.
     */
    deleteSpecificKnowledge = (scientistId: string, specificKnowledgeId: string) =>
        this.http.post(this.endpointUrl + scientistId + '/deleteSpecificKnowledge/'
            + specificKnowledgeId, null);

    /**
     * Push new specific knowledge
     * object to current array of specific
     * knowledge items on UI.
     *
     * @param specificKnowledge new specific knowledge item
     */
    pingSpecificKnowledge(specificKnowledge: SpecificKnowledge): void {
        this.specificKnowledge.next(specificKnowledge);
    }

    /**
     * Listen to changes
     * on current list of specific
     * knowledge items on UI.
     */
    listenSpecificKnowledge(): Observable<SpecificKnowledge> {
        return this.specificKnowledge.asObservable();
    }
}
