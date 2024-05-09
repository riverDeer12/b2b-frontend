import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {OnboardingService} from "../services/onboarding.service";
import {OnboardingBatch} from "../models/onboarding-batch";

@Injectable({
    providedIn: 'root'
})
export class OnboardingResolver implements Resolve<OnboardingBatch> {

    constructor(private service: OnboardingService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OnboardingBatch> {
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
