import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {EquipmentService} from '../../core/services/equipment.service';
import {Equipment} from "../../core/models/equipment";
import {EntityType} from "../../../auth/core/enums/entity-type";
import {DialogFormComponent} from "../../../shared/components/dialog-form/dialog-form.component";
import {FormType} from "../../../shared/enums/form-type";
import {DialogContentTypes} from "../../../shared/constants/dialog-content-types";
import {DialogService} from "primeng/dynamicdialog";

@Component({
    selector: 'equipment-data-table',
    templateUrl: './equipment-data-table.component.html',
    styleUrls: ['./equipment-data-table.component.scss']
})
export class EquipmentDataTableComponent {
    @Input() data: Equipment[] = [];
    @Input() scientistId!: string;
    @Input() dialogEdit!: boolean;

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private dialogService: DialogService,
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
     * Redirect user to
     * equipment edit page.
     *
     * @param equipment selected equipment.
     */
    goToEditPage = (equipment: Equipment) =>
        this.router.navigateByUrl('/admin/equipment/edit/' + EntityType.Scientist +
            '/' + equipment.scientistId + '/' + equipment.id).then();

    /**
     * Prepare edit form
     * for selected equipment.
     *
     * @param equipment selected research problem.
     */
    prepareEditControl(equipment: Equipment): void {
        this.dialogEdit ? this.openEditDialog(equipment) : this.goToEditPage(equipment);
    }

    /**
     * Open equipment
     * edit form in dialog.
     *
     * @param equipment selected equipment.
     */
    openEditDialog(equipment: Equipment) {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'edit',
                formType: FormType.Edit,
                contentType: DialogContentTypes.Equipment,
                data: equipment,
                parentEntityType: EntityType.Scientist,
                parentEntityId: this.scientistId
            }
        })
    }

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

