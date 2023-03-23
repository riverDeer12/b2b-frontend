import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

    constructor(private service: UserService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
        return this.service.getUsers();
    }
}
