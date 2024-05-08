import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Onboarding} from "../models/onboarding";
import {OnboardingService} from "../services/onboarding.service";

@Injectable({
    providedIn: 'root'
})
export class OnboardingResolver implements Resolve<Onboarding> {

    constructor(private service: OnboardingService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Onboarding> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/onboardings').then();
        }

        return this.service.getOnboardingBatchDetails(routeId as string);
    }
}
