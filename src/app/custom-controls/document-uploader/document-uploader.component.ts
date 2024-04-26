import {Component, Input} from '@angular/core';
import {EntityType} from "../../auth/core/enums/entity-type";
import {FormBuilder} from "@angular/forms";
import {NotificationService} from "../../shared/services/notification.service";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";

@Component({
    selector: 'document-uploader',
    templateUrl: './document-uploader.component.html',
    styleUrls: ['./document-uploader.component.scss']
})
export class DocumentUploaderComponent {
    @Input() entityType!: EntityType;
    @Input() entityId!: string;
    @Input() documents!: any;

    addDocumentUrl!: string;
    deleteDocumentUrl!: string;

    constructor(private fb: FormBuilder,
                private http: HttpClient,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.addDocumentUrl = environment.apiUrl + '/' + this.entityType.toString() + '/' + this.entityId + '/documents';
        this.deleteDocumentUrl = environment.apiUrl + '/' + this.entityType + '/' + this.entityId + '/documents/';
    }

    addDocument(event: any) {
        const formData: FormData = new FormData();

        formData.append('document', event.files[0]);

        // Append the additional JSON data
        formData.append('name', event.files[0].name);

        this.http.post(this.addDocumentUrl, formData).subscribe((response => {
            console.log(response);
        }))
    }

    deleteDocument(event: any): void {
        console.log(event);
    }
}
