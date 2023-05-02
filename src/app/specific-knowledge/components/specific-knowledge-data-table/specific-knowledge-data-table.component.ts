import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {SpecificKnowledge} from '../../core/models/specific-knowledge';
import {SpecificKnowledgeService} from '../../core/services/specific-knowledge.service';
import {DialogFormComponent} from '../../../shared/components/dialog-form/dialog-form.component';
import {FormType} from '../../../shared/enums/form-type';
import {DialogContentTypes} from '../../../shared/constants/dialog-content-types';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {DialogService} from 'primeng/dynamicdialog';
import {Category} from '../../../categories/core/models/category';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
    selector: 'specific-knowledge-data-table',
    templateUrl: './specific-knowledge-data-table.component.html',
    styleUrls: ['./specific-knowledge-data-table.component.scss']
})
export class SpecificKnowledgeDataTableComponent {
    @Input() data!: SpecificKnowledge[];
    @Input() categories!: Category[];
    @Input() scientistId!: string;
    @Input() dialogEdit!: boolean;

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private dialogService: DialogService,
                private activatedRoute: ActivatedRoute,
                private sharedService: SharedService,
                private specificKnowledgeService: SpecificKnowledgeService,
                private notificationService: NotificationService,
                private router: Router) {
        this.sharedService.subscribeForDataChanges(EntityType.SpecificKnowledge);
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
     * @param specificKnowledge selected specific knowledge.
     */
    goToEditPage = (specificKnowledge: SpecificKnowledge) =>
        this.router.navigateByUrl('/admin/specific-knowledge/edit/' + specificKnowledge.scientistId + '/' + specificKnowledge.id).then();

    /**
     * Prepare edit form
     * for selected specific knowledge.
     *
     * @param specificKnowledge selected research problem.
     */
    prepareEditControl(specificKnowledge: SpecificKnowledge): void {
        this.dialogEdit ? this.openEditDialog(specificKnowledge) : this.goToEditPage(specificKnowledge);
    }

    /**
     * Open specific knowledge
     * edit form in dialog.
     *
     * @param specificKnowledge selected specific knowledge.
     */
    openEditDialog(specificKnowledge: SpecificKnowledge) {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'specific-knowledge.edit',
                formType: FormType.Edit,
                contentType: DialogContentTypes.SpecificKnowledge,
                data: specificKnowledge,
                parentEntityType: EntityType.Scientist,
                parentEntityId: this.scientistId
            }
        })
    }

    /**
     * Trigger dialog to
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

    /**
     * Trigger dialog form
     * for creating new specific knowledge item
     * for scientist.
     */
    openCreateDialog(): void {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'specific-knowledge.create',
                formType: FormType.Create,
                contentType: DialogContentTypes.SpecificKnowledge,
                parentEntityType: EntityType.Scientist,
                parentEntityId: this.scientistId,
                categories: this.categories
            }
        })
    }
}

