import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ScientistService} from '../services/scientist.service';
import {Scientist} from '../models/scientist';

@Injectable({
    providedIn: 'root'
})
export class ScientistsResolver implements Resolve<Scientist[]> {

    constructor(private service: ScientistService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scientist[]> {
        return this.service.getScientists();
    }
}
