import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LatestService} from '../services/latest.service';
import {Scientist} from '../../../../scientists/core/models/scientist';

@Injectable({
  providedIn: 'root'
})
export class LatestScientistsResolver implements Resolve<Scientist[]> {

    constructor(private latestService: LatestService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scientist[]> {
        return this.latestService.getScientists();
    }
}
