import {Component} from '@angular/core';
import {OnboardingProcessType} from "../../core/types/onboarding-process-type";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../auth/core/services/auth.service";

@Component({
    selector: 'onboarding-process',
    templateUrl: './onboarding-process.component.html',
    styleUrls: ['./onboarding-process.component.scss']
})
export class OnboardingProcessComponent {
    type!: OnboardingProcessType;
    iconType!: string;
    token!: string;

    isLoading = false;

    public get onboardingType(): typeof OnboardingProcessType {
        return OnboardingProcessType;
    }

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.listenToResolver();

        if (this.type === this.onboardingType.Accepted) {
            this.token = this.activatedRoute.snapshot.queryParams['token'];
        }
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.type = response["type"] as OnboardingProcessType;
            switch (this.type) {
                case OnboardingProcessType.Accepted:
                case OnboardingProcessType.AlreadyAccepted:
                    this.iconType = 'check';
                    return;
                case OnboardingProcessType.Declined:
                case OnboardingProcessType.AlreadyDeclined:
                    this.iconType = 'times';
                    return;
            }
        });

    }

    /**
     * Login user after accepted
     * onboarding process.
     */
    loginUser(): void {
        this.isLoading = true;
        localStorage.setItem('token', this.token);
        this.router.navigateByUrl('my-profile').then();
        this.isLoading = false;
    }
}
