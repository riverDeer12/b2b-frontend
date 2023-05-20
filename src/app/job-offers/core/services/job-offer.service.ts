import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from 'src/environments/environment';
import {JobOffer} from '../models/job-offer';

/**
 * Service that provides communication between
 * job offers module and endpoints on api
 * which correspond to job offer entity.
 */
@Injectable({
    providedIn: 'root'
})
export class JobOfferService {

    jobOfferUrl = environment.apiUrl + '/companies/';

    jobOffer = new Subject<JobOffer>();

    constructor(private http: HttpClient) {
    }

    /**
     * Get all created job offers.
     */
    getAllJobOffers = () => this.http.get<JobOffer[]>(this.jobOfferUrl + '/getJobOffers');

    /**
     * Get job offers for selected company.
     *
     * @param companyId id of related company.
     */
    getJobOffers = (companyId: string) =>
        this.http.get<JobOffer[]>(this.jobOfferUrl + companyId + '/getJobOffers');

    /**
     * Get job offer entity by
     * identifier.
     *
     * @param companyId id of related company.
     * @param id job offer entity identifier.
     */
    getJobOffer = (companyId: string, id: string) =>
        this.http.get<JobOffer>(this.jobOfferUrl + companyId + '/getJobOffer/' + id);

    /**
     * Create job offer with form data.
     *
     * @param companyId id of related company.
     * @param postData form data for creating job offer.
     */
    createJobOffer = (companyId: string, postData: JobOffer) =>
        this.http.post<JobOffer>(this.jobOfferUrl + companyId + '/createJobOffer', postData);

    /**
     *
     * @param companyId id of related company.
     * @param id job offer entity identifier.
     * @param updateData form data for updating existing job offer.
     */
    editJobOffer = (companyId: string, id: string, updateData: JobOffer) =>
        this.http.post<JobOffer>(this.jobOfferUrl + companyId + '/editJobOffer/' + id, updateData);

    /**
     * Delete job offer by identifier.
     *
     * @param companyId id of related company.
     * @param id job offer entity identifier.
     */
    deleteJobOffer = (companyId: string, id: string) =>
        this.http.post(this.jobOfferUrl + companyId + '/deleteJobOffer/' + id, null);


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
