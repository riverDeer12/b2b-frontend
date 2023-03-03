import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {JobOffer} from '../models/job-offers/job-offer';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  jobOfferUrl = environment.apiUrl + '/companies/';

  newJobOffer = new Subject<any>();

  constructor(private http: HttpClient) { }

  getJobOffers(companyId: string): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.jobOfferUrl + companyId + '/getJobOffers');
  }

  getJobOffer(jobOfferId: string, companyId: string) {
    return this.http.get<JobOffer>(this.jobOfferUrl + companyId + '/getJobOffer/' + jobOfferId);
  }

  createJobOffer(companyId: string, jobOffer: JobOffer) {
    return this.http.post(this.jobOfferUrl + companyId + '/createJobOffer', jobOffer);
  }

  editJobOffer(jobOfferId: string, companyId: string, jobOffer: JobOffer) {
    return this.http.post(this.jobOfferUrl + companyId + '/editJobOffer/' + jobOfferId, jobOffer);
  }

  flipJobOfferActive(jobOfferId: string, companyId: string) {
    return this.http.post(this.jobOfferUrl + companyId + '/flipJobOfferActive/' +  jobOfferId, null);
  }

  deleteJobOffer(jobOfferId: string, companyId: string) {
    return this.http.post(this.jobOfferUrl + companyId + '/deleteJobOffer/' + jobOfferId, null);
  }

  pingJobOffers(): void {
    this.newJobOffer.next({success: true});
  }

  listenJobOffers(): Observable<any> {
    return this.newJobOffer.asObservable();
  }
}
