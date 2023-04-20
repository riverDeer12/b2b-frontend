import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {JobOffer} from "../../core/models/job-offer";
import {JobOfferService} from "../../core/services/job-offer.service";
import {DialogFormComponent} from "../../../shared/components/dialog-form/dialog-form.component";
import {FormType} from "../../../shared/enums/form-type";
import {DialogContentTypes} from "../../../shared/constants/dialog-content-types";
import {DialogService} from "primeng/dynamicdialog";
import {EntityType} from "../../../auth/core/enums/entity-type";

@Component({
    selector: 'job-offers-data-table',
    templateUrl: './job-offers-data-table.component.html',
    styleUrls: ['./job-offers-data-table.component.scss']
})
export class JobOffersDataTableComponent {
    @Input() data: JobOffer[] = [];
    @Input() dialogEdit!: boolean;

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private dialogService: DialogService,
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
     * @param jobOffer of selected job offer.
     */
    goToEditPage = (jobOffer: JobOffer) =>
        this.router.navigateByUrl('/admin/job-offers/edit/' + jobOffer.companyId + '/' + jobOffer.id).then();

    /**
     * Prepare edit form
     * for selected job offer
     *
     * @param jobOffer selected research problem.
     */
    prepareEditControl(jobOffer: JobOffer): void {
        this.dialogEdit ? this.openEditDialog(jobOffer) : this.goToEditPage(jobOffer);
    }

    /**
     * Open job offer
     * edit form in dialog.
     *
     * @param jobOffer selected job offer.
     */
    openEditDialog(jobOffer: JobOffer) {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'job-offer-edit',
                formType: FormType.Edit,
                contentType: DialogContentTypes.JobOffer,
                data: jobOffer,
                parentEntityType: EntityType.Company,
                parentEntityId: jobOffer.companyId
            }
        })
    }

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

