import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';
import { SpecificKnowledge } from '../models/specific-knowledge/specific-knowledge';

@Injectable({
  providedIn: 'root'
})
export class SpecificKnowledgeService {

  specificKnowledgeUrl = environment.apiUrl + '/scientists/';

  newSpecificKnowledge = new Subject<any>();

  constructor(private http: HttpClient) { }

  getSpecificKnowledgeList(scientistId: string): Observable<SpecificKnowledge[]> {
    return this.http.get<SpecificKnowledge[]>(this.specificKnowledgeUrl + scientistId + '/getSpecificKnowledge');
  }

  getSpecificKnowledge(scientistId: string, specificKnowledgeId: string): Observable<SpecificKnowledge> {
    return this.http.get<SpecificKnowledge>(this.specificKnowledgeUrl + scientistId +  '/getSpecificKnowledge/' + specificKnowledgeId);
  }

  createSpecificKnowledge(scientistId: string, specificKnowledge: SpecificKnowledge) {
    return this.http.post(this.specificKnowledgeUrl + scientistId + '/createSpecificKnowledge', specificKnowledge);
  }

  editSpecificKnowledge(scientistId: string, specificKnowledgeId: string, specificKnowledge: SpecificKnowledge) {
    return this.http.post(this.specificKnowledgeUrl + scientistId + '/editSpecificKnowledge/' + specificKnowledgeId, specificKnowledge);
  }

  flipSpecificKnowledgeActive(scientistId: string, specificKnowledgeId: string) {
    return this.http.post(this.specificKnowledgeUrl + scientistId + '/flipSpecificKnowledgeActive/' +  specificKnowledgeId, null);
  }

  deleteSpecificKnowledge(scientistId: string, specificKnowledgeId: string) {
    return this.http.post(this.specificKnowledgeUrl + scientistId + '/deleteSpecificKnowledge/' + specificKnowledgeId, null);
  }

  pingSpecificKnowledge(): void {
    this.newSpecificKnowledge.next({success: true});
  }

  listenSpecificKnowledge(): Observable<any> {
    return this.newSpecificKnowledge.asObservable();
  }
}
