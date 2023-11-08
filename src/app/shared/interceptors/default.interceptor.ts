import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../../auth/core/services/auth.service';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {LoaderService, LoadingOverlayRef} from '../services/loader.service';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router, private loadingService: LoaderService) {
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

        let loadingRef: LoadingOverlayRef;

        Promise.resolve(null).then(() => (loadingRef = this.loadingService.open()));

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
                        loadingRef?.close();
                        if (error.status === 401) {
                            const logoutUrl = this.authService.getLogoutUrl();
                            localStorage.removeItem('token');
                            this.router.navigateByUrl(logoutUrl).then();
                        } else if (error.status === 403) {
                            this.router.navigateByUrl('auth/forbidden').then();
                        } else if (error.status === 500) {
                            this.router.navigateByUrl('auth/error').then();
                        }
                    }, () => {
                        loadingRef?.close();
                    }
                )
            );
        } else {
            return next.handle(request.clone()).pipe(
                tap(
                    () => {
                        //intended
                        loadingRef?.close();
                    },
                    (_) => {
                        loadingRef?.close();
                    },
                    () => {
                        loadingRef?.close();
                    }
                )
            );
        }
    }
}
