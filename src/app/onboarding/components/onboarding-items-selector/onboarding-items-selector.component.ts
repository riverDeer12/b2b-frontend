import {Component, Input} from '@angular/core';
import {Onboarding} from "../../core/models/onboarding";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {OnboardingService} from "../../core/services/onboarding.service";
import {NotificationType} from "../../../shared/enums/notification-type";
import {NotificationService} from "../../../shared/services/notification.service";

@Component({
    selector: 'onboarding-items-selector',
    templateUrl: './onboarding-items-selector.component.html',
    styleUrls: ['./onboarding-items-selector.component.scss']
})
export class OnboardingItemsSelectorComponent {
    @Input() data!: Onboarding[];
    @Input() label!: string;
    @Input() batchId!: string;

    isLoading!: boolean;

    form!: FormGroup;

    constructor(private fb: FormBuilder,
                private notificationService: NotificationService,
                private onboardingService: OnboardingService) {
        this.initForm();
    }

    ngOnInit(): void {
    }

    initForm() {
        this.form = this.fb.group({
            onboardingBatchItemIds: new FormControl(''),
            sendEmails: new FormControl(environment.sendEmails)
        })
    }

    onSubmit(): void {

        this.isLoading = true;

        this.onboardingService.sendEmails(this.batchId, this.form.value)
            .subscribe((response) => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'onboardings.emails-send-successfully');

                this.form.reset();

                this.isLoading = false;

            }, error => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'onboardings.error-sending-emails');

                this.isLoading = false;
            })
    }
}
