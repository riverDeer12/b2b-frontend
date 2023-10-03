import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Company} from '../../../../../companies/core/models/company';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";

@Injectable({
    providedIn: 'root'
})
export class MyProfileResolver implements Resolve<string> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
        return '';
    }
}
