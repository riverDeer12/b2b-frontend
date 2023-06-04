import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/admin/core/services/app.layout.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'auth-login-admin',
    templateUrl: './login-admin.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginAdminComponent {

    password!: string;

    loginForm!: FormGroup;

    isLoading!: boolean;

    constructor(public layoutService: LayoutService,
                private fb: FormBuilder,
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

        this.authService.loginSuperAdmin(this.loginForm.value).subscribe((response:any) => {

            localStorage.setItem('token', response.token);

            this.router.navigateByUrl('/admin/activities').then();

            this.notificationService
                .showNotification(NotificationType.Success,
                    'auth.welcome-to-dashboard');
        }, () => {
            this.isLoading = false;
            this.notificationService
                .showNotification(NotificationType.Error,
                    'auth.login-error');
        })
    }
}
