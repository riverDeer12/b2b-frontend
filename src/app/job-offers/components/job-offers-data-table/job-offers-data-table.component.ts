import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {JobOffer} from "../../core/models/job-offer";
import {JobOfferService} from "../../core/services/job-offer.service";

@Component({
    selector: 'job-offers-data-table',
    templateUrl: './job-offers-data-table.component.html',
    styleUrls: ['./job-offers-data-table.component.scss']
})
export class JobOffersDataTableComponent {
    @Input() data: JobOffer[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private jobOfferService: JobOfferService,
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
     * Redirect user to job offer
     * edit page.
     *
     * @param companyId id of parent of selected job offer.
     * @param jobOfferId id of selected job offer.
     */
    goToEditPage = (companyId: string, jobOfferId: string) =>
        this.router.navigateByUrl('/admin/job-offers/edit/' + companyId + '/' + jobOfferId).then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * job offer item from data table.
     *
     * @param companyId id of parent of selected job offer.
     * @param jobOfferId id of selected job offer.
     */
    confirmDelete(companyId: string, jobOfferId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.jobOfferService.deleteJobOffer(companyId, jobOfferId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== jobOfferId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }
}

