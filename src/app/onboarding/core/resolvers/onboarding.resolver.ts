import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {OnboardingService} from "../services/onboarding.service";
import {Onboarding} from "../models/onboarding";

@Injectable({
    providedIn: 'root'
})
export class OnboardingResolver implements Resolve<Onboarding> {

    constructor(private service: OnboardingService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Onboarding> {
        const batchId = route.paramMap.get('batchId');

        if (!batchId) {
            this.router.navigateByUrl('admin/onboardings').then();
        }

        const itemId = route.paramMap.get('id');

        if (!itemId) {
            this.router.navigateByUrl('admin/onboardings').then();
        }

        return this.service.getOnboardingBatchDetails(batchId as string, itemId as string);
    }
}
