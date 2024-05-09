import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import {SharedService} from "../../../shared/services/shared.service";
import {NotificationService} from "../../../shared/services/notification.service";
import {Router} from "@angular/router";
import {Table} from "primeng/table";
import {NotificationType} from "../../../shared/enums/notification-type";
import {OnboardingService} from "../../core/services/onboarding.service";
import {Onboarding} from "../../core/models/onboarding";

@Component({
    selector: 'onboarding-data-table',
    templateUrl: './onboarding-data-table.component.html',
    styleUrls: ['./onboarding-data-table.component.scss']
})
export class OnboardingDataTableComponent {
    @Input() data: Onboarding[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private onboardingService: OnboardingService,
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
     * Redirect user to news
     * edit page.
     *
     * @param batchId id of item's batch.
     * @param id id of selected batch item.
     */
    goToInfoPage = (batchId: string, id: string) =>
        this.router.navigateByUrl('/admin/onboardings/info/' + batchId + '/items/' + id).then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * onboarding item from data table.
     */
    confirmDelete(onboardingId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.onboardingService.deleteOnboarding(onboardingId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== onboardingId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }
}
