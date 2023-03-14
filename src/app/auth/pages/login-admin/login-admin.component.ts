import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/admin/core/services/app.layout.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

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

    valCheck: string[] = ['remember'];

    password!: string;

    loginForm!: FormGroup;

    constructor(public layoutService: LayoutService,
                private fb: FormBuilder,
                private authService: AuthService,
                private messageService: MessageService,
                private router: Router) {
        this.setLoginForm();
    }

    private setLoginForm() {
        this.loginForm = this.fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        })
    }

    submit() {

        if (this.loginForm.invalid) {

            this.loginForm.markAllAsTouched();

            this.messageService.add({
                severity: 'error',
                summary: 'Validation error',
                detail: 'Wrong data provided. Try again.'
            });

            return;
        }

        this.authService.loginSuperAdmin(this.loginForm.value).subscribe((response:any) => {

            localStorage.setItem('token', response.token);

            this.router.navigateByUrl('/admin/activities').then();

            this.messageService.add({
                severity: 'success',
                summary: 'Successful Login',
                detail: 'Welcome to the RIMAP dashboard.'
            });
        })
    }
}
