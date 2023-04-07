import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EntityType} from '../../core/enums/entity-type';
import {environment} from '../../../../environments/environment';
import {NotificationType} from '../../../shared/enums/notification-type';
import {NotificationService} from '../../../shared/services/notification.service';
import {AuthService} from '../../core/services/auth.service';

@Component({
    selector: 'auth-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    @Input() username!: string | undefined;
    @Input() entityType!: EntityType;

    form!: FormGroup;

    changePasswordEndpoint!: string;

    constructor(private fb: FormBuilder,
                private notificationService: NotificationService,
                private authService: AuthService) {
        this.setFormGroup();
    }

    ngOnInit(): void {
        this.setChangePasswordEndpoint();
    }

    private setFormGroup(): void {
        this.form = this.fb.group({
            username: new FormControl(this.username, Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        })
    }

    private setChangePasswordEndpoint(): void {
        this.changePasswordEndpoint =
            environment.apiUrl + '/auth/' + this.entityType.toString() + '/resetPassword';
    }

    submit(): void {
        if (this.form.invalid) {

            this.form.markAllAsTouched();

            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');

            return;
        }

        this.authService.resetPassword(this.username as string, this.changePasswordEndpoint).subscribe((response: Object) => {
            this.notificationService
                .showNotification(NotificationType.Error,
                    'password-changed-successfully');
        })
    }
}
