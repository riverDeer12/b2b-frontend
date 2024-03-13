import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import {NotificationService} from "../../../../shared/services/notification.service";
import {SharedService} from "../../../../shared/services/shared.service";
import {Router} from "@angular/router";
import {Table} from "primeng/table";
import {NotificationType} from "../../../../shared/enums/notification-type";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {FreeFormNewsletter} from "../../core/models/free-form-newsletter";
import {FreeFormNewsletterService} from "../../core/services/free-form-newsletter.service";

@Component({
    selector: 'free-form-newsletter-data-table',
    templateUrl: './free-form-newsletter-data-table.component.html',
    styleUrls: ['./free-form-newsletter-data-table.component.scss']
})
export class FreeFormNewsletterDataTableComponent {
    @Input() data!: FreeFormNewsletter[];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private notificationService: NotificationService,
                private sharedService: SharedService,
                private newsletterService: FreeFormNewsletterService,
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
    goToEditPage = (id: string) =>
        this.router.navigateByUrl('/admin/newsletters/free-form/edit/' + id).then();

    /**
     * Redirect user to newsletters
     * create page.
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/newsletters/free-form/create').then();

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
                this.newsletterService.deleteFreeFormNewsletter(newsId)
                    .subscribe((response: Object) => {
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
                this.sharedService.flipActive(EntityType.Newsletter, newsId)
                    .subscribe((response: any) => {
                            this.notificationService
                                .showNotification(NotificationType.Success,
                                    'activity-change.successfully-changed');

                            let flippedEntity = this.data
                                .find(x => x.id === response.id) as FreeFormNewsletter;

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
