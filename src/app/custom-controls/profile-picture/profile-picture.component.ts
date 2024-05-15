import {Component, Input} from '@angular/core';
import {EntityType} from '../../auth/core/enums/entity-type';
import {SharedService} from '../../shared/services/shared.service';
import {NotificationService} from '../../shared/services/notification.service';
import {FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {NotificationType} from '../../shared/enums/notification-type';

@Component({
    selector: 'profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
    @Input() parentForm!: FormGroup;
    @Input() entityType!: EntityType;
    @Input() parentEntityType!: EntityType;
    @Input() entityId!: string;
    @Input() parentEntityId!: string;
    @Input() name!: string;

    constructor(private sharedService: SharedService, private notificationService: NotificationService) {
    }

    get uploadImageUrl(): string {
        if (!this.parentEntityType && !this.parentEntityId) {
            return environment.apiUrl + '/' + this.entityType + '/' + this.entityId + '/images';
        } else {

            const parentEntityPrefix: string = this.parentEntityType + '/' + this.parentEntityId;

            return environment.apiUrl + '/' + parentEntityPrefix + '/'
                + this.entityType + '/' + this.entityId + '/images'
        }
    }

    profilePictureChange(): void {
        window.location.reload();
    }

    onError(): void {
        this.notificationService
            .showNotification(NotificationType.Error, 'file-upload.error');
    }
}
