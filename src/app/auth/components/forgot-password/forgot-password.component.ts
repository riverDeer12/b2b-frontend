import {Component, Input, OnInit} from '@angular/core';
import {ValidationService} from '../../../shared/services/validation.service';
import {AuthService} from '../../core/services/auth.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../shared/services/notification.service';
import {EntityType} from '../../core/enums/entity-type';
import {environment} from '../../../../environments/environment';
import {SharedService} from '../../../shared/services/shared.service';
import {RedirectType} from '../../../shared/enums/redirect-type';

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    @Input() entityType!: EntityType;
    @Input() redirectType!: RedirectType;
    @Input() dialogId!: string;
    @Input() returnUrl!: string;

    form!: FormGroup;

    isLoading = false;

    changePasswordEndpoint!: string;

    constructor(public validationService: ValidationService,
                private fb: FormBuilder,
                private sharedService: SharedService,
                private notificationService: NotificationService,
                private authService: AuthService) {
        this.initFormGroup();
    }

    ngOnInit() {
        this.changePasswordEndpoint = environment.apiUrl + '/auth/' + this.entityType.toString()
            + '/reset-password';
    }

    initFormGroup(): void {
        this.form = this.fb.group({
            username: new FormControl('', Validators.required)
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

        this.authService.resetPassword(this.form.get('username')?.value as string,
            this.changePasswordEndpoint).subscribe((response) => {

                console.log(response);

                this.notificationService
                    .showNotification(NotificationType.Success,
                        'auth.successfully-sent-change-password-email');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.isLoading = false;
            },
            (error: any) => {

                console.log(error);

                this.notificationService
                    .showNotification(NotificationType.Error,
                        'auth.error-sending-change-password-email');

                this.isLoading = false;
            })
    }

}
