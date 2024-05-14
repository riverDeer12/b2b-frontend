import {Component} from '@angular/core';
import {OnboardingProcessType} from "../../core/types/onboarding-process-type";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'onboarding-process',
    templateUrl: './onboarding-process.component.html',
    styleUrls: ['./onboarding-process.component.scss']
})
export class OnboardingProcessComponent {
    type!: OnboardingProcessType;
    iconType!: string;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
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
}
