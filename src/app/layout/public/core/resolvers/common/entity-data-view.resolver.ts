import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EntityType} from '../../../../../auth/core/enums/entity-type';
import {Observable} from 'rxjs';
import {environment} from '../../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EntityDataViewResolver implements Resolve<any[]> {

    private publicUrl = environment.apiUrl + '/public/';

    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
        const entityType = route.data['entityType'] as EntityType;
        return this.http.get<any[]>(this.publicUrl + entityType);
    }
}
