import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {Scientist} from "../../../../../scientists/core/models/scientist";

@Injectable({
  providedIn: 'root'
})
export class PublicScientistsResolver implements Resolve<Scientist[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scientist[]> {
        return this.publicService.getScientists();
    }
}
