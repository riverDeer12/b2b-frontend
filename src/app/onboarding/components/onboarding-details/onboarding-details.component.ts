import {Component, Input} from '@angular/core';
import {Onboarding} from "../../core/models/onboarding";

@Component({
    selector: 'onboarding-details',
    templateUrl: './onboarding-details.component.html',
    styleUrls: ['./onboarding-details.component.scss']
})
export class OnboardingDetailsComponent {
    @Input() onboarding!: Onboarding;

    constructor() {
    }

    ngOnInit(): void {
    }
}
