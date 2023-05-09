import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/internal/Subject';
import {environment} from 'src/environments/environment';
import {SpecificKnowledge} from '../models/specific-knowledge';

@Injectable({
    providedIn: 'root'
})
export class SpecificKnowledgeService {

    specificKnowledgeUrl = environment.apiUrl + '/scientists/';

    specificKnowledge = new Subject<SpecificKnowledge>();

    constructor(private http: HttpClient) {
    }

    getAllSpecificKnowledge() {
        return this.http.get<SpecificKnowledge[]>(this.specificKnowledgeUrl + '/getSpecificKnowledge');
    }

    getSpecificKnowledgeList(scientistId: string): Observable<SpecificKnowledge[]> {
        return this.http.get<SpecificKnowledge[]>(this.specificKnowledgeUrl + scientistId + '/getSpecificKnowledge');
    }

    getSpecificKnowledge(scientistId: string, specificKnowledgeId: string): Observable<SpecificKnowledge> {
        return this.http.get<SpecificKnowledge>(this.specificKnowledgeUrl + scientistId + '/getSpecificKnowledge/' + specificKnowledgeId);
    }

    createSpecificKnowledge(scientistId: string, specificKnowledge: SpecificKnowledge) {
        return this.http.post(this.specificKnowledgeUrl + scientistId + '/createSpecificKnowledge', specificKnowledge);
    }

    editSpecificKnowledge(scientistId: string, specificKnowledgeId: string, specificKnowledge: SpecificKnowledge) {
        return this.http.post(this.specificKnowledgeUrl + scientistId + '/editSpecificKnowledge/' + specificKnowledgeId, specificKnowledge);
    }

    flipSpecificKnowledgeActive(scientistId: string, specificKnowledgeId: string) {
        return this.http.post(this.specificKnowledgeUrl + scientistId + '/flipSpecificKnowledgeActive/' + specificKnowledgeId, null);
    }

    deleteSpecificKnowledge(scientistId: string, specificKnowledgeId: string) {
        return this.http.post(this.specificKnowledgeUrl + scientistId + '/deleteSpecificKnowledge/' + specificKnowledgeId, null);
    }

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
