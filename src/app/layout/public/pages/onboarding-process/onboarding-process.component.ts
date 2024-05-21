import {Component} from '@angular/core';
import {OnboardingProcessType} from "../../core/types/onboarding-process-type";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../../../companies/core/models/company";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {RedirectType} from "../../../../shared/enums/redirect-type";
import {NotificationType} from "../../../../shared/enums/notification-type";
import jwtDecode from "jwt-decode";
import {AuthToken} from "../../../../auth/core/models/auth-token";
import {NotificationService} from "../../../../shared/services/notification.service";
import {CompanyService} from "../../../../companies/core/services/company.service";

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

    company!: Company;

    returnUrl = "my-profile";

    public get onboardingType(): typeof OnboardingProcessType {
        return OnboardingProcessType;
    }

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    public get redirectType(): typeof RedirectType {
        return RedirectType;
    }

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private notificationService: NotificationService,
                private companyService: CompanyService) {
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

            if (!this.token) {
                this.router.navigateByUrl('').then();
                this.notificationService.showNotification(NotificationType.Error,
                    'onboardings.error-processing-onboarding-item');
            } else {
                const onboardingEntityToken = jwtDecode(this.token as string) as AuthToken;

                this.companyService.getCompany(onboardingEntityToken.nameid)
                    .subscribe((response) => {
                        this.company = Object.assign(new Company(), response)
                    });
            }
        });
    }
}
