import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Newsletter} from '../../core/models/newsletter';
import {Table} from 'primeng/table';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';
import {NotificationType} from '../../../shared/enums/notification-type';
import {NewsletterService} from '../../core/services/newsletter.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
    selector: 'newsletters-data-table',
    templateUrl: './newsletters-data-table.component.html',
    styleUrls: ['./newsletters-data-table.component.scss']
})
export class NewslettersDataTableComponent {

    @Input() data!: Newsletter[];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private notificationService: NotificationService,
                private sharedService: SharedService,
                private newsletterService: NewsletterService,
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
     * Redirect user to newsletters
     * edit page.
     *
     * @param id id of selected newsletters item.
     */
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/newsletters/edit/' + id).then();

    /**
     * Redirect user to newsletters
     * create page.
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/newsletters/create').then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * news item from data table.
     *
     * @param newsId - news identifier
     */
    confirmDelete(newsId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.newsletterService.deleteNewsletter(newsId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== newsId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }

    openFlipActiveDialog(newsId: string): void {
        this.confirmationService.confirm({
            accept: () => {
                this.sharedService.flipActive(EntityType.Newsletter, newsId).subscribe((response: any) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity-change.successfully-changed');

                        let flippedEntity = this.data.find(x => x.id === response.id) as Newsletter;

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
