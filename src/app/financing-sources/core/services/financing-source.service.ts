import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {FinancingSource} from "../models/financing-source";

/**
 * Service that provides communication between
 * financing sources module and endpoints on api
 * which correspond to financing source entity.
 */
@Injectable({
    providedIn: 'root'
})
export class FinancingSourceService {

    financingSourcesEndpoint = environment.apiUrl + '/financing-sources/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get financing sources entities
     * created on platform.
     */
    getFinancingSources = () => this.http.get<FinancingSource[]>(this.financingSourcesEndpoint);

    /**
     * Find equipment entity by identifier.
     *
     * @param id financing source entity identifier.
     */
    getFinancingSource = (id: string) =>
        this.http.get<FinancingSource>(this.financingSourcesEndpoint + id);
}
