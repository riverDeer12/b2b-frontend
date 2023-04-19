import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ResearchProblemService} from '../../core/services/research-problem.service';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {NotificationService} from '../../../shared/services/notification.service';
import {Table} from 'primeng/table';
import {NotificationType} from '../../../shared/enums/notification-type';
import {ResearchProblem} from '../../core/models/research-problem';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {DialogService} from 'primeng/dynamicdialog';
import {DialogFormComponent} from '../../../shared/components/dialog-form/dialog-form.component';
import {FormType} from '../../../shared/enums/form-type';
import {DialogContentTypes} from '../../../shared/constants/dialog-content-types';

@Component({
    selector: 'research-problems-data-table',
    templateUrl: './research-problems-data-table.component.html',
    styleUrls: ['./research-problems-data-table.component.scss']
})
export class ResearchProblemsDataTableComponent {
    @Input() data!: ResearchProblem[];
    @Input() parentEntityType!: EntityType;
    @Input() parentEntityId!: string;
    @Input() returnUrl!: string;
    @Input() modalEdit!: boolean;

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private dialogService: DialogService,
                private researchProblemService: ResearchProblemService,
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
     * Prepare edit form
     * for selected research problem.
     *
     * @param researchProblem selected research problem.
     */
    prepareEditControl(researchProblem: ResearchProblem): void {
        this.modalEdit ? this.openEditDialog(researchProblem) : this.goToEditPage(researchProblem);
    }

    /**
     * Redirect user to research
     * problems edit page.
     *
     * @param researchProblem selected research problem item.
     */
    goToEditPage = (researchProblem: ResearchProblem) =>
        this.router.navigateByUrl('/admin/research-problems/edit/' + this.parentEntityType +
            '/' + this.parentEntityId + '/' + researchProblem.id).then();

    /**
     * Open research problem
     * edit form in dialog.
     *
     * @param researchProblem selected research problem.
     */
    openEditDialog(researchProblem: ResearchProblem): void {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'research-problem-edit',
                formType: FormType.Edit,
                contentType: DialogContentTypes.ResearchProblem,
                data: researchProblem,
                dataParentEntityType: this.parentEntityType,
                dataParentEntityId: this.parentEntityId
            }
        })
    }

    /**
     * Trigger popup to
     * confirm deleting selected
     * research problem item from data table.
     */
    confirmDelete(researchProblemId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.researchProblemService.deleteResearchProblem(researchProblemId,
                    this.parentEntityType, this.parentEntityId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== researchProblemId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }
}
