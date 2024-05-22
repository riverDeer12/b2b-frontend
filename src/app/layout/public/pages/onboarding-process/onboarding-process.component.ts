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

    company!: Company;

    returnUrl = "my-profile";

    isCompanyProcessing!: boolean;

    token!: string;

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
        this.isCompanyProcessing = true;
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.type = response["type"] as OnboardingProcessType;

            switch (this.type) {
                case OnboardingProcessType.Accepted:
                case OnboardingProcessType.AlreadyAccepted:
                    this.iconType = 'check';
                    this.getOnboardingEntity();
                    return;
                case OnboardingProcessType.Declined:
                case OnboardingProcessType.AlreadyDeclined:
                    this.iconType = 'times';
                    return;
            }
        });
    }

    private getOnboardingEntity() {
        this.activatedRoute.queryParams.subscribe(params => {
            const token = params['token'];

            if (!token) {
                this.router.navigateByUrl('').then();
            }

            localStorage.setItem('token', this.token)

            const authToken = jwtDecode(this.token as string) as AuthToken;

            this.companyService.getCompany(authToken.nameid).subscribe((response => {
                this.company = Object.assign(new Company(), response);
                this.isCompanyProcessing = false;
            }), () => {
                this.notificationService.showNotification(NotificationType.Error,
                    "onboardings.error-processing-onboarding-item");
            })
        });
    }
}
