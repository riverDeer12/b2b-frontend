import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from '../../services/public.service';
import {EntityType} from '../../../../../auth/core/enums/entity-type';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EntityDetailsResolver implements Resolve<any> {

    constructor(private publicService: PublicService,
                private router: Router,
                private http: HttpClient) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const entityType = route.paramMap.get('entityType') as EntityType;

        if (!entityType) {
            this.router.navigateByUrl('auth/not-found').then();
        }

        const id = route.paramMap.get('id') as string;

        if (!id) {
            this.router.navigateByUrl('auth/not-found').then();
        }

        return this.http.get(environment.apiUrl + '/public/' + entityType + '/' + id);
    }
}
