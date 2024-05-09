import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Onboarding} from "../../core/models/onboarding";

@Component({
    selector: 'onboarding-info',
    templateUrl: './onboarding-info.component.html',
    styleUrls: ['./onboarding-info.component.scss']
})
export class OnboardingInfoComponent {
    onboarding!: Onboarding;

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.onboarding = Object.assign(response["onboarding"], new Onboarding());
        });
    }


}
