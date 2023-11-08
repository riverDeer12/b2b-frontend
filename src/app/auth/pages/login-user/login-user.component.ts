import {Component} from '@angular/core';
import {LayoutService} from '../../../layout/admin/core/services/app.layout.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {NotificationType} from '../../../shared/enums/notification-type';
import {EntityType} from '../../core/enums/entity-type';
import {DialogFormComponent} from '../../../shared/components/dialog-form/dialog-form.component';
import {FormType} from '../../../shared/enums/form-type';
import {DialogContentTypes} from '../../../shared/constants/dialog-content-types';
import {DialogService} from 'primeng/dynamicdialog';
import {ValidationService} from '../../../shared/services/validation.service';

@Component({
    selector: 'auth-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.scss'],
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginUserComponent {
    password!: string;
    loginForm!: FormGroup;
    isLoading!: boolean;
    selectedEntityType: EntityType = EntityType.Company;

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    constructor(public layoutService: LayoutService,
                public validationService: ValidationService,
                private fb: FormBuilder,
                private dialogService: DialogService,
                private authService: AuthService,
                private notificationService: NotificationService,
                private translateService: TranslateService,
                private router: Router) {
        this.setLoginForm();
        this.isLoading = false;
    }

    private setLoginForm() {
        this.loginForm = this.fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            entityType: new FormControl('', Validators.required)
        })
    }

    submit() {

        this.isLoading = true;

        if (this.loginForm.invalid) {

            this.loginForm.markAllAsTouched();

            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');

            this.isLoading = false;

            return;
        }

        this.authService.loginUser(this.loginForm.value).subscribe((response: any) => {

            localStorage.setItem('token', response.token);

            this.router.navigateByUrl('my-profile').then();

            this.notificationService
                .showNotification(NotificationType.Success,
                    'auth.welcome-to-platform');
        }, () => {
            this.isLoading = false;
            this.notificationService
                .showNotification(NotificationType.Error,
                    'auth.login-error');
        })
    }

    openForgotPasswordDialog(): void {

        if(this.loginForm.get('entityType')?.invalid){

            this.notificationService
                .showNotification(NotificationType.Error,
                    'auth.login-type-required');

            return;
        }


        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'auth.forgot-password.default',
                formType: FormType.Create,
                contentType: DialogContentTypes.ForgotPassword,
                parentEntityType: this.loginForm.get('entityType')?.value as EntityType
            }
        })
    }
}
