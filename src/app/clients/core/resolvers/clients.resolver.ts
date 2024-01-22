import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ClientService} from '../services/client.service';
import {Client} from "../models/client";

@Injectable({
    providedIn: 'root'
})
export class ClientsResolver implements Resolve<Client[]> {

    constructor(private service: ClientService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client[]> {
        return this.service.getClients();
    }
}
