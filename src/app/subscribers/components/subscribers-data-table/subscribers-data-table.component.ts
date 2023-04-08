import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {NotificationService} from '../../../shared/services/notification.service';
import {Router} from '@angular/router';
import {Table} from 'primeng/table';
import {NotificationType} from '../../../shared/enums/notification-type';
import {Subscriber} from '../../core/models/subscriber';
import {SubscriberService} from '../../core/services/subscriber.service';

@Component({
  selector: 'subscribers-data-table',
  templateUrl: './subscribers-data-table.component.html',
  styleUrls: ['./subscribers-data-table.component.scss']
})
export class SubscribersDataTableComponent {
    @Input() data: Subscriber[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private subscriberService: SubscriberService,
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
     * Redirect user to subscribers
     * edit page.
     *
     * @param id id of selected subscriber item.
     */
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/subscribers/edit/' + id).then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * subscriber item from data table.
     *
     * @param subscriberId id of selected scientist
     */
    confirmDelete(subscriberId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.subscriberService.deleteSubscriber(subscriberId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.userId !== subscriberId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }
}
