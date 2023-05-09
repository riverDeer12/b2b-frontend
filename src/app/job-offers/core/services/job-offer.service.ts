import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from 'src/environments/environment';
import {JobOffer} from '../models/job-offer';

@Injectable({
    providedIn: 'root'
})
export class JobOfferService {

    jobOfferUrl = environment.apiUrl + '/companies/';

    jobOffer = new Subject<JobOffer>();

    constructor(private http: HttpClient) {
    }

    getAllJobOffers(): Observable<JobOffer[]> {
        return this.http.get<JobOffer[]>(this.jobOfferUrl + '/getJobOffers');
    }

    getJobOffers(companyId: string): Observable<JobOffer[]> {
        return this.http.get<JobOffer[]>(this.jobOfferUrl + companyId + '/getJobOffers');
    }

    getJobOffer(companyId: string, jobOfferId: string) {
        return this.http.get<JobOffer>(this.jobOfferUrl + companyId + '/getJobOffer/' + jobOfferId);
    }

    createJobOffer(companyId: string, jobOffer: JobOffer): Observable<JobOffer> {
        return this.http.post<JobOffer>(this.jobOfferUrl + companyId + '/createJobOffer', jobOffer);
    }

    editJobOffer(companyId: string, jobOfferId: string, jobOffer: JobOffer): Observable<JobOffer> {
        return this.http.post<JobOffer>(this.jobOfferUrl + companyId + '/editJobOffer/' + jobOfferId, jobOffer);
    }

    flipJobOfferActive(companyId: string, jobOfferId: string) {
        return this.http.post(this.jobOfferUrl + companyId + '/flipJobOfferActive/' + jobOfferId, null);
    }

    deleteJobOffer(companyId: string, jobOfferId: string) {
        return this.http.post(this.jobOfferUrl + companyId + '/deleteJobOffer/' + jobOfferId, null);
    }

    /**
     * Push new job offer
     * object to current array of job offer
     * items on UI.
     *
     * @param jobOffer new job offer item
     */
    pingJobOffers(jobOffer: JobOffer): void {
        this.jobOffer.next(jobOffer);
    }

    /**
     * Listen to changes
     * on current list of job offer
     * items on UI.
     */
    listenJobOffers(): Observable<JobOffer> {
        return this.jobOffer.asObservable();
    }
}
