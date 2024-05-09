import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {OnboardingService} from "../services/onboarding.service";
import {OnboardingBatch} from "../models/onboarding-batch";

@Injectable({
    providedIn: 'root'
})
export class OnboardingsResolver implements Resolve<OnboardingBatch[]> {

    constructor(private service: OnboardingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OnboardingBatch[]> {
        return this.service.getOnboardingBatches();
    }
}
