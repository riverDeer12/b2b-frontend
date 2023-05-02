import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormType} from '../../../shared/enums/form-type';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {ResearchProblem} from '../../core/models/research-problem';
import {ResearchProblemService} from '../../core/services/research-problem.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {SharedService} from '../../../shared/services/shared.service';
import {RedirectType} from '../../../shared/enums/redirect-type';
import {Category} from '../../../categories/core/models/category';

/**
 * Component responsible for
 * managing research problem data. It
 * can be defined with different input
 * decorators.
 *
 * @param formType type of form action.
 * @param parentEntityType type of parent entity.
 * @param redirectType type of redirect action.
 * @param parentEntityId id of parent entity.
 * @param researchProblem data for managing.
 * @param returnUrl url to redirect user after form submit.
 * @param dialogId parent dialog form identifier.
 *
 */
@Component({
    selector: 'research-problem-form',
    templateUrl: './research-problem-form.component.html',
    styleUrls: ['./research-problem-form.component.scss']
})
export class ResearchProblemFormComponent {
    @Input() formType!: FormType;
    @Input() parentEntityType!: EntityType;
    @Input() redirectType!: RedirectType;
    @Input() parentEntityId!: string;
    @Input() researchProblem!: ResearchProblem;
    @Input() returnUrl!: string;
    @Input() dialogId!: string;
    @Input() categories!: Category[];

    form!: FormGroup;

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    constructor(private fb: FormBuilder,
                private router: Router,
                private sharedService: SharedService,
                private notificationService: NotificationService,
                private researchProblemService: ResearchProblemService) {
    }

    ngOnInit() {
        this.initFormGroup();
    }

    /**
     * Switch function depending on
     * form action type from input decorator.
     */
    private initFormGroup = () => this.formType === FormType.Create ?
        this.initCreateForm() : this.initEditForm();


    /**
     * Initializes form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            academicCommunityContributionPossibility: new FormControl('', Validators.required),
            categories: new FormControl('', Validators.required)
        });
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            title: new FormControl(this.researchProblem.title, Validators.required),
            description: new FormControl(this.researchProblem.description, Validators.required),
            academicCommunityContributionPossibility:
                new FormControl(this.researchProblem.academicCommunityContributionPossibility, Validators.required),
            categories: new FormControl(this.researchProblem.categories.map(x => x.id), Validators.required)
        });
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {

        if (this.form.invalid) {
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            return;
        }

        this.formType === FormType.Create ?
            this.createResearchProblem() :
            this.editResearchProblem();
    }

    /**
     * Connecting to research problem
     * service and sending form data to
     * create research problem.
     */
    private createResearchProblem() {
        this.researchProblemService
            .createResearchProblem(this.parentEntityType, this.researchProblem.id, this.form.value)
            .subscribe(() => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'research-problems.successfully-created');

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);
                },
                (error) => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');
                })
    }

    /**
     * Connecting to research problem
     * service and sending form data to
     * updated selected research problem.
     */
    private editResearchProblem(): void {
        this.researchProblemService
            .editResearchProblem(this.researchProblem.id, this.parentEntityType, this.parentEntityId, this.form.value)
            .subscribe(() => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'research-problems.successfully-updated');

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);
                },
                (error) => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');
                })
    }
}
