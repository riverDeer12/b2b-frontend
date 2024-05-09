import { Component } from '@angular/core';
import {Onboarding} from "../../core/models/onboarding";
import {ActivatedRoute} from "@angular/router";
import {OnboardingBatch} from "../../core/models/onboarding-batch";

@Component({
  selector: 'onboarding-home',
  templateUrl: './onboarding-home.component.html',
  styleUrls: ['./onboarding-home.component.scss']
})
export class OnboardingHomeComponent {
    onboardingBatches!: OnboardingBatch[];

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }


    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.onboardingBatches = Object.assign(new OnboardingBatch(),response["onboardings"]);
        });
    }
}
