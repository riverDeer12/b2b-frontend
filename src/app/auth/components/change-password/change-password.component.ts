import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EntityType} from '../../core/enums/entity-type';
import {environment} from '../../../../environments/environment';
import {NotificationType} from '../../../shared/enums/notification-type';
import {NotificationService} from '../../../shared/services/notification.service';
import {AuthService} from '../../core/services/auth.service';
import {SharedService} from "../../../shared/services/shared.service";
import {RedirectType} from "../../../shared/enums/redirect-type";

@Component({
    selector: 'auth-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    @Input() username!: string;
    @Input() entityType!: EntityType;
    @Input() redirectType!: RedirectType;
    @Input() returnUrl!: string;
    @Input() dialogId!: string;
    @Input() token!: string;

    form!: FormGroup;

    changePasswordEndpoint!: string;

    isLoading!: boolean;

    constructor(private fb: FormBuilder,
                private sharedService: SharedService,
                private notificationService: NotificationService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.setFormGroup();
    }

    private setFormGroup(): void {
        this.form = this.fb.group({
            username: new FormControl({value: this.username, disabled: true}, Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        })

        this.changePasswordEndpoint = environment.apiUrl + '/auth/' + this.entityType.toString()
            + '/resetPassword';
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

        this.authService.resetPassword(this.username as string, this.changePasswordEndpoint)
            .subscribe((response: Object) => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'password-changed-successfully');

                    if (this.token) {
                        localStorage.setItem('token', this.token);
                    }

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                    this.isLoading = false;
                },
                (error: Object) => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'error-changing-password');

                    this.isLoading = false;
                });
    }
}
