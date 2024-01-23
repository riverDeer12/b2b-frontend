import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Client} from "../../core/models/client";
import {Table} from "primeng/table";
import {NotificationType} from "../../../shared/enums/notification-type";
import {EntityType} from "../../../auth/core/enums/entity-type";
import {ConfirmationService} from "primeng/api";
import {ClientService} from "../../core/services/client.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../shared/services/notification.service";
import {SharedService} from "../../../shared/services/shared.service";
import {DialogFormComponent} from "../../../shared/components/dialog-form/dialog-form.component";
import {FormType} from "../../../shared/enums/form-type";
import {DialogContentTypes} from "../../../shared/constants/dialog-content-types";
import {DialogService} from "primeng/dynamicdialog";

@Component({
    selector: 'clients-data-table',
    templateUrl: './clients-data-table.component.html',
    styleUrls: ['./clients-data-table.component.scss']
})
export class ClientsDataTableComponent {
    @Input() data!: Client[];

    @ViewChild('filter') filter!: ElementRef;

    @ViewChild('clientsDataTable') table!: Table;

    constructor(private confirmationService: ConfirmationService,
                private clientService: ClientService,
                private dialogService: DialogService,
                private router: Router,
                private notificationService: NotificationService,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.listenForDataChanges();
    }

    /**
     * Method for handling
     * global filter across data.
     *
     * @param table table identifier
     * @param event filter event type
     */
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    /**
     * Method for clearing
     * global filter input data.
     *
     * @param table
     */
    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    /**
     * Show notification when
     * api key is copied.
     */
    apiKeyCopiedNotification = () => {
        this.notificationService
            .showNotification(NotificationType.Success, 'clients.api-key-copied');
    }

    /**
     * Trigger popup to
     * confirm deleting selected
     * client item from data table.
     */
    confirmDelete(clientId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.clientService.deleteClient(clientId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== clientId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }

    /**
     * Open dialog with
     * create form for desired entity.
     */
    openCreateDialog(): void {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'clients.create',
                formType: FormType.Create,
                contentType: DialogContentTypes.Client
            }
        })
    }

    /**
     * Open dialog with
     * edit form for desired entity.
     */
    openEditDialog(client: Client): void {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'clients.edit',
                formType: FormType.Edit,
                contentType: DialogContentTypes.Client,
                data: client
            }
        })
    }

    /**
     * Data change listener
     * subscribe method.
     */
    private listenForDataChanges(): void {
        this.clientService.listenClients()
            .subscribe((response: Client) => {
                this.clientService.getClients()
                    .subscribe((response: Client[]) => {
                        this.data = response.map((x: Client) =>
                            Object.assign(new Client(), x)
                        );
                        this.table.reset();
                    })
            })
    }

    /**
     * Open dialog which changes
     * entity activity status.
     *
     * @param clientId id of selected entity in
     * datatable.
     */
    openFlipActiveDialog(clientId: string): void {
        this.confirmationService.confirm({
            accept: () => {
                this.sharedService.flipActive(EntityType.Client, clientId).subscribe((response: any) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity-change.successfully-changed');

                        let flippedEntity = this.data.find(x => x.id === response.id) as Client;

                        flippedEntity.isActive = !flippedEntity.isActive;
                    },

                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'activity-change.error');
                    })
            },
        });
    }
}
