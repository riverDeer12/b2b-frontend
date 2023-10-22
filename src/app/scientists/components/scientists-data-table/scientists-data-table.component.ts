import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {NotificationService} from '../../../shared/services/notification.service';
import {Router} from '@angular/router';
import {Table} from 'primeng/table';
import {NotificationType} from '../../../shared/enums/notification-type';
import {Scientist} from '../../core/models/scientist';
import {ScientistService} from '../../core/services/scientist.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
  selector: 'scientists-data-table',
  templateUrl: './scientists-data-table.component.html',
  styleUrls: ['./scientists-data-table.component.scss']
})
export class ScientistsDataTableComponent {
    @Input() data: Scientist[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private scientistService: ScientistService,
                private sharedService: SharedService,
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
     * Redirect user to scientists
     * edit page.
     *
     * @param id id of selected scientist item.
     */
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/scientists/edit/' + id).then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * scientists item from data table.
     *
     * @param scientistId id of selected scientist
     */
    confirmDelete(scientistId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.scientistService.deleteScientist(scientistId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== scientistId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }

    openFlipActiveDialog(scientistId: string): void {
        this.confirmationService.confirm({
            accept: () => {
                this.sharedService.flipActive(EntityType.Scientist, scientistId).subscribe((response: any) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity-change.successfully-changed');

                        let flippedEntity = this.data.find(x => x.id === response.id) as Scientist;

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
