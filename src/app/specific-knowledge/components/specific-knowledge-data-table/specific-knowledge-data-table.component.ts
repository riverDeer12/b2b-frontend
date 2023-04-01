import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Category} from '../../core/models/category';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {SpecificKnowledge} from "../../core/models/specific-knowledge";
import {SpecificKnowledgeService} from "../../core/services/specific-knowledge.service";

@Component({
    selector: 'specific-knowledge-data-table',
    templateUrl: './specific-knowledge-data-table.component.html',
    styleUrls: ['./specific-knowledge-data-table.component.scss']
})
export class SpecificKnowledgeDataTableComponent {
    @Input() data: SpecificKnowledge[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private specificKnowledgeService: SpecificKnowledgeService,
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
     * Redirect user to specific
     * knowledge edit page.
     *
     * @param scientistId parent id of selected specific knowledge.
     * @param specificKnowledgeId id of selected specific knowledge.
     */
    goToEditPage = (scientistId: string, specificKnowledgeId: string) =>
        this.router.navigateByUrl('/admin/specific-knowledge/edit/' + scientistId + '/' + specificKnowledgeId).then();

    /**
     * Redirect user to specific
     * knowledge create page.
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/specific-knowledge/create').then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * specific knowledge item from data table.
     *
     * @param scientistId parent id of selected specific knowledge.
     * @param specificKnowledgeId id of selected specific knowledge.
     */
    confirmDelete(scientistId: string, specificKnowledgeId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.specificKnowledgeService.deleteSpecificKnowledge(scientistId, specificKnowledgeId)
                    .subscribe((response: Object) => {
                            this.notificationService
                                .showNotification(NotificationType.Success, 'successfully-deleted');
                            this.data = this.data.filter((x => x.id !== specificKnowledgeId));
                        },
                        (error: Object) => {
                            this.notificationService
                                .showNotification(NotificationType.Error, 'error-deleting');
                        })
            },
        });
    }
}

