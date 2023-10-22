import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {EquipmentService} from '../../core/services/equipment.service';
import {Equipment} from '../../core/models/equipment';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {FormType} from '../../../shared/enums/form-type';
import {DialogService} from 'primeng/dynamicdialog';
import {Category} from '../../../categories/core/models/category';
import {SharedService} from '../../../shared/services/shared.service';
import {DialogContentTypes} from '../../../shared/constants/dialog-content-types';
import {DialogFormComponent} from '../../../shared/components/dialog-form/dialog-form.component';

@Component({
    selector: 'equipment-data-table',
    templateUrl: './equipment-data-table.component.html',
    styleUrls: ['./equipment-data-table.component.scss']
})
export class EquipmentDataTableComponent {
    @Input() data: Equipment[] = [];
    @Input() scientistId!: string;
    @Input() categories!: Category[];
    @Input() dialogEdit!: boolean;

    @ViewChild('filter') filter!: ElementRef;
    @ViewChild('equipmentDataTable') table!: Table;

    constructor(private confirmationService: ConfirmationService,
                private dialogService: DialogService,
                private sharedService: SharedService,
                private equipmentService: EquipmentService,
                private notificationService: NotificationService,
                private router: Router) {
        this.listenForDataChanges();
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
                header: 'equipment.edit',
                formType: FormType.Edit,
                contentType: DialogContentTypes.Equipment,
                data: equipment,
                parentEntityType: EntityType.Scientist,
                parentEntityId: this.scientistId,
                categories: this.categories
            }
        })
    }

    /**
     * Trigger dialog form
     * for creating new equipment item
     * for scientist.
     */
    openCreateDialog(): void {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'equipment.create',
                formType: FormType.Create,
                contentType: DialogContentTypes.Equipment,
                parentEntityType: EntityType.Scientist,
                parentEntityId: this.scientistId,
                categories: this.categories
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
                this.equipmentService.deleteEquipment(scientistId, equipmentId).subscribe(() => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== equipmentId));
                    },
                    () => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }

    /**
     * Data change listener
     * subscribe method.
     */
    private listenForDataChanges(): void {
        this.equipmentService.listenEquipment()
            .subscribe((response: Equipment) => {
                this.equipmentService.getEquipment(this.scientistId)
                    .subscribe((response: Equipment[]) => {
                        this.data = response.map((x: Equipment) =>
                            Object.assign(new Equipment(), x)
                        );
                        this.table.reset();
                    })
            })
    }

    openFlipActiveDialog(equipmentId: string): void {
        this.confirmationService.confirm({
            key: 'confirmEquipmentActivityChangeDialog',
            accept: () => {
                this.sharedService.flipActive(EntityType.Equipment, equipmentId, EntityType.Scientist,
                    this.scientistId).subscribe((response: any) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity-change.successfully-changed');

                        let flippedEntity = this.data.find(x => x.id === response.id) as Equipment;

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

