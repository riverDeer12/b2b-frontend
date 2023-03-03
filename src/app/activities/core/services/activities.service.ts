import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Activity} from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  activitiesUrl = environment.apiUrl + '/activity';

  constructor(private http: HttpClient) {
  }

  getLastActivities(): Observable<Activity> {
    return this.http.get<Activity>(this.activitiesUrl + '/get');
  }

}
