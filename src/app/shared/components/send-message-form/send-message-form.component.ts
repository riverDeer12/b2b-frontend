import {Component, Input} from '@angular/core';
import {FormType} from '../../enums/form-type';
import {RedirectType} from '../../enums/redirect-type';
import {CommunicationService} from '../../services/communication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationType} from '../../enums/notification-type';
import {NotificationService} from '../../services/notification.service';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {ValidationService} from '../../services/validation.service';
import {EntityType} from '../../../auth/core/enums/entity-type';

@Component({
    selector: 'send-message-form',
    templateUrl: './send-message-form.component.html',
    styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent {
    @Input() formType!: FormType;
    @Input() dialogId!: string;
    @Input() redirectType!: RedirectType;
    @Input() receiverId!: string;
    @Input() receiverEntityType!: EntityType;
    @Input() returnUrl!: string;

    isLoading: boolean = false;

    form!: FormGroup;

    constructor(private communicationService: CommunicationService,
                private fb: FormBuilder,
                public validationService: ValidationService,
                private router: Router,
                private sharedService: SharedService,
                private notificationService: NotificationService) {
        this.initForm();
    }

    initForm(): void {
        this.form = this.fb.group({
            content: new FormControl('', Validators.required)
        })
    }

    submit(): void {

        this.isLoading = true;

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Warning,
                    'correct-validation-errors');

            this.isLoading = false;

            return;
        }

        const receiverIndex = Object.values(EntityType).indexOf(this.receiverEntityType as unknown as EntityType);

        const receiverEntityType = Object.keys(EntityType)[receiverIndex];

        this.communicationService.sendMessage(this.receiverId, receiverEntityType,
            this.form.get('content')?.value)
            .subscribe((response: object) => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'communications.message-sent-successfully');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.isLoading = false;

            }, () => {
                this.isLoading = false;
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'communications.error-sending-message');
            })
    }
}
