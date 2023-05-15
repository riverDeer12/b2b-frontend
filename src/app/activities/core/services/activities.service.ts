import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Activity} from '../models/activity';

/**
 * Service that provides communication between
 * activities module and endpoints on api
 * which correspond to activity module.
 */
@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {

    endpointUrl = environment.apiUrl + '/activity';

    constructor(private http: HttpClient) {
    }

    /**
     * Get report for last
     * activities for main entities.
     */
    getLastActivities = () =>
        this.http.get<Activity>(this.endpointUrl + '/get');
}
