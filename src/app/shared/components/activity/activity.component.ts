import {Component, Input} from '@angular/core';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {environment} from '../../../../environments/environment';
import {SharedService} from '../../services/shared.service';
import {NotificationType} from '../../enums/notification-type';
import {NotificationService} from '../../services/notification.service';

@Component({
    selector: 'activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
    @Input() entityId!: EntityType;
    @Input() entityType!: EntityType;
    @Input() currentValue!: boolean;

    activityEndpoint = environment.apiUrl + this.entityType + '/' + this.entityId;

    constructor(private sharedService: SharedService, private notificationService: NotificationService) {
    }

    /**
     * Connect to service
     * to communicate with api endpoint
     * for changing activity status.
     */
    changeEntityActivity(): void {
        this.sharedService.changeEntityActivity(this.activityEndpoint, this.entityId)
            .subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success, 'activity-changed-successfully');
                this.sharedService.closeDialogOnSuccess('activityDialog');
            }, () => {
                this.notificationService
                    .showNotification(NotificationType.Error, 'activity-change-error');
            })
    }
}
