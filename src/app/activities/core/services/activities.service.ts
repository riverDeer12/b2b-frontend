import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Activity} from '../models/activity';
import {MostPopular} from '../models/most-popular';

/**
 * Service that provides communication between
 * activities module and endpoints on api
 * which correspond to activity module.
 */
@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {

    endpointUrl = environment.apiUrl + '/activity/';

    private mostPopularEntities = 5;

    constructor(private http: HttpClient) {
    }

    /**
     * Get report for last
     * activities on platform.
     */
    getLastActivities = () =>
        this.http.get<Activity>(this.endpointUrl);

    /**
     * Get report for most
     * popular main entities on platform.
     */
    getMostPopularEntities = () =>
        this.http.get<MostPopular>(this.endpointUrl +
            'most-popular?numberOfEntitiesToReturn=' + this.mostPopularEntities);
}
