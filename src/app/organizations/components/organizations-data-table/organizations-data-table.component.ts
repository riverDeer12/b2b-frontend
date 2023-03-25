import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Organization} from '../../core/models/organization';
import {ConfirmationService} from 'primeng/api';
import {OrganizationService} from '../../core/services/organization.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {Router} from '@angular/router';
import {Table} from 'primeng/table';
import {NotificationType} from '../../../shared/enums/notification-type';

@Component({
  selector: 'organizations-data-table',
  templateUrl: './organizations-data-table.component.html',
  styleUrls: ['./organizations-data-table.component.scss']
})
export class OrganizationsDataTableComponent {
    @Input() data: Organization[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private organizationService: OrganizationService,
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
     * Redirect user to organizations
     * edit page.
     *
     * @param id id of selected news item.
     */
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/organizations/edit/' + id).then();

    /**
     * Redirect user to organizations
     * create page.
     *
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/organizations/create').then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * organizations item from data table.
     */
    confirmDelete(organizationId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.organizationService.deleteOrganization(organizationId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== organizationId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }
}
