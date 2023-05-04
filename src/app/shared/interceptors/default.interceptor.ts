import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../../auth/core/services/auth.service';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) {
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        if (this.authService.userLogged() || this.authService.isSuperAdminLogged()) {
            const clonedRequest = request.clone({
                headers: request.headers.set(
                    'Authorization',
                    'Bearer ' + localStorage.getItem('token')
                ),
            });

            return next.handle(clonedRequest).pipe(
                tap(
                    () => {
                    },
                    (error) => {
                        if (error.status === 401) {
                            const logoutUrl = this.authService.getLogoutUrl();
                            localStorage.removeItem('token');
                            this.router.navigateByUrl(logoutUrl).then();
                        } else if (error.status === 403) {
                            this.router.navigateByUrl('auth/forbidden').then();
                        }
                    }
                )
            );
        } else {
            return next.handle(request.clone());
        }
    }
}
