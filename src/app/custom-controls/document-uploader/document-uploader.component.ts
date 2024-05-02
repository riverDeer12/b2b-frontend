import {Component, Input} from '@angular/core';
import {EntityType} from "../../auth/core/enums/entity-type";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EntityDocument} from "../core/model/entity-document";
import {NotificationService} from "../../shared/services/notification.service";
import {NotificationType} from "../../shared/enums/notification-type";

@Component({
    selector: 'document-uploader',
    templateUrl: './document-uploader.component.html',
    styleUrls: ['./document-uploader.component.scss']
})
export class DocumentUploaderComponent {
    @Input() entityType!: EntityType;
    @Input() entityId!: string;
    @Input() documents!: EntityDocument[];

    addDocumentUrl!: string;

    deleteDocumentUrl!: string;

    constructor(private http: HttpClient,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.addDocumentUrl = environment.apiUrl + '/' + this.entityType.toString() + '/' + this.entityId + '/documents';
        this.deleteDocumentUrl = environment.apiUrl + '/' + this.entityType + '/' + this.entityId + '/documents/';
    }

    addDocument(event: any) {
        const formData: FormData = new FormData();

        formData.append('document', event.files[0]);

        formData.append('name', event.files[0].name);

        this.http.post(this.addDocumentUrl, formData).subscribe((response => {
            this.notificationService
                .showNotification(NotificationType.Success, 'file-upload.successfully-uploaded');

        }), (error) => {
            this.notificationService
                .showNotification(NotificationType.Error, 'file-upload.error');
        })
    }

    deleteDocument(documentId: string): void {
        this.http.delete(this.deleteDocumentUrl + documentId).subscribe((response) => {
            this.notificationService
                .showNotification(NotificationType.Success, 'file-upload.successfully-deleted');
        }, (error) => {
            this.notificationService
                .showNotification(NotificationType.Error, 'file-upload.error-deleting');
        })
    }
}
