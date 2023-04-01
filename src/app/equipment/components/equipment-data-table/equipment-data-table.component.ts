import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {EquipmentService} from '../../core/services/equipment.service';
import {Equipment} from "../../core/models/equipment";
import {EntityType} from "../../../auth/core/enums/entity-type";

@Component({
    selector: 'equipment-data-table',
    templateUrl: './equipment-data-table.component.html',
    styleUrls: ['./equipment-data-table.component.scss']
})
export class EquipmentDataTableComponent {
    @Input() data: Equipment[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private equipmentService: EquipmentService,
                private notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit() {

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
     * Redirect user to equipment
     * edit page.
     *
     * @param scientistId id of selected equipment's scientist.
     * @param equipmentId id of selected equipment item.
     */
    goToEditPage = (scientistId: string, equipmentId: string) =>
        this.router.navigateByUrl('/admin/equipment/edit/' + EntityType.Scientist +
            '/' + scientistId + '/' + equipmentId).then();

    /**
     * Redirect user to equipment create page.
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/equipment/create').then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * equipment item from data table.
     *
     * @param scientistId selected equipment scientist id
     * @param equipmentId selected equipment id
     */
    confirmDelete(scientistId: string, equipmentId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.equipmentService.deleteEquipment(scientistId, equipmentId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== equipmentId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }
}

