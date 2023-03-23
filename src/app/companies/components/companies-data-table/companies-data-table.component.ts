import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Category} from '../../../categories/core/models/category';
import {ConfirmationService} from 'primeng/api';
import {NotificationService} from '../../../shared/services/notification.service';
import {Router} from '@angular/router';
import {Table} from 'primeng/table';
import {NotificationType} from '../../../shared/enums/notification-type';
import {CompanyService} from '../../core/services/company.service';
import {Company} from '../../core/models/company';

@Component({
    selector: 'companies-data-table',
    templateUrl: './companies-data-table.component.html',
    styleUrls: ['./companies-data-table.component.scss']
})
export class CompaniesDataTableComponent {
    @Input() data: Company[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private companyService: CompanyService,
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
     * Redirect user to companies
     * edit page.
     *
     * @param id id of selected news item.
     */
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/companies/edit/' + id).then();

    /**
     * Redirect user to companies
     * create page.
     *
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/companies/create').then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * companies item from data table.
     */
    confirmDelete(categoryId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.companyService.deleteCompany(categoryId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== categoryId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }
}
