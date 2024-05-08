import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Onboarding} from "../models/onboarding";
import {OnboardingService} from "../services/onboarding.service";

@Injectable({
    providedIn: 'root'
})
export class OnboardingsResolver implements Resolve<Onboarding[]> {

    constructor(private service: OnboardingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Onboarding[]> {
        return this.service.getOnboardingBatches();
    }
}
