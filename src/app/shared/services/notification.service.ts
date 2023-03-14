import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MessageService} from 'primeng/api';
import {NotificationType} from '../enums/notification-type';
import {ApiErrorMessage} from '../models/api-error-message';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(
        private translateService: TranslateService,
        private messageService: MessageService
    ) {
    }

    /**
     * Method that connects to PrimeNG message
     * service and renders notification message.
     *
     * @param type notification type value
     * @param messageKey JSON key of message resource
     */
    showNotification(type: NotificationType, messageKey: string): void {
        this.translateService.get(messageKey).subscribe((message: string) => {
            switch (type) {
                case NotificationType.Success:
                    this.success(message);
                    break;
                case NotificationType.Error:
                    this.error(message);
                    break;
                case NotificationType.Warning:
                    this.warning(message);
                    break;
                case NotificationType.Info:
                    this.info(message);
                    break;
                default:
                    this.success(message);
            }
        });
    }

    /**
     * Call success notification.
     *
     * @param message success notification message.
     */
    private success = (message: string) => {
        this.messageService.add({
            severity: 'info',
            detail: message,
            icon: 'pi-check'
        });
    };

    /**
     * Call error notification.
     *
     * @param message error notification message.
     */
    private error = (message: string) => {
        this.messageService.add({
            severity: 'error',
            detail: message
        });
    };

    /**
     * Call warning notification.
     *
     * @param message warning notification message.
     */
    private warning = (message: string) => {
        this.messageService.add({
            severity: 'warn',
            detail: message
        });
    };

    /**
     * Call info notification.
     *
     * @param message info notification message.
     */
    private info = (message: string) => {
        this.messageService.add({
            severity: 'info',
            detail: message
        });
    };

    /**
     * Show notification message
     * based on error code
     * got from api service.
     *
     * @param apiErrorMessages response from api service.
     */
    showApiErrorMessage(apiErrorMessages: ApiErrorMessage[]): void {
        if (!apiErrorMessages) {
            this.error('Error occurred, but no details given!');
        }
        // if apiErrorMessage is array then its the first
        // if the the response is plain object it can be in this form as well "Exception - 037"
        // everything else, stringify and show
        if (Array.isArray(apiErrorMessages)) {
            apiErrorMessages.forEach((errorMessage: ApiErrorMessage) => {
                this.translateService.get(errorMessage.errorCode).subscribe((resourceKey: string) => {
                    this.showNotification(NotificationType.Error, 'error-codes.' + resourceKey);
                });
            });
        } else if (typeof (apiErrorMessages) === 'object' && typeof (apiErrorMessages['errorCode']) !== 'undefined') {
            let errorCode = <string>apiErrorMessages['errorCode'];
            if (errorCode) {
                errorCode = errorCode.replace('Exception - ', '');
                this.translateService.get(errorCode).subscribe((resourceKey: string) => {
                    this.showNotification(NotificationType.Error, 'error-codes.' + resourceKey);
                });
            }
        } else {
            this.error(JSON.stringify(apiErrorMessages));
        }

    }


}
