import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Scientist} from '../models/scientist';
import {ScientistService} from '../services/scientist.service';

@Injectable({
    providedIn: 'root'
})
export class ScientistResolver implements Resolve<Scientist> {

    constructor(private service: ScientistService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scientist> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/scientists').then();
        }

        return this.service.getScientist(routeId as string);
    }
}
