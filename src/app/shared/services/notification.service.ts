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
            this.setNotificationContent(type, message);
        });
    }

    /**
     * Call success notification.
     *
     * @param type notification type which corresponds to summary message key.
     * @param message success notification message.
     */
    private setNotificationContent = (type: NotificationType, message: string) => {
        this.translateService.get(type).subscribe((summary: string) => {
            this.messageService.add({
                summary: summary,
                severity: type,
                detail: message,
                icon: this.getIconKey(type)
            });
        });
    };

    /**
     * Helper method to set icon key
     * based on notification type.
     *
     * @param type enum value for notification type.
     */
    getIconKey(type: NotificationType): string {
        switch (type) {
            case NotificationType.Success:
                return 'pi-check';
            case NotificationType.Error:
                return 'pi-times';
            case NotificationType.Warning:
                return 'pi-question';
            case NotificationType.Info:
                return 'pi-info';
            default:
                return 'pi-info';
        }
    }

    /**
     * Show notification message
     * based on error code
     * got from api service.
     *
     * @param apiErrorMessages response from api service.
     */
    showApiErrorMessage(apiErrorMessages: ApiErrorMessage[]): void {
        if (!apiErrorMessages) {
            this.showNotification(NotificationType.Error, 'no-error-details');
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
            this.setNotificationContent(NotificationType.Error, JSON.stringify(apiErrorMessages));
        }

    }


}
