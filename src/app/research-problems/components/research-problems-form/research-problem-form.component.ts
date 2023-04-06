import {Component, Input} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationService} from "../../../shared/services/notification.service";
import {NotificationType} from "../../../shared/enums/notification-type";
import {ResearchProblem} from "../../core/models/research-problem";
import {ResearchProblemService} from "../../core/services/research-problem.service";
import {EntityType} from "../../../auth/core/enums/entity-type";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
    selector: 'research-problem-form',
    templateUrl: './research-problem-form.component.html',
    styleUrls: ['./research-problem-form.component.scss']
})
export class ResearchProblemFormComponent {
    @Input() formType!: FormType;
    @Input() researchProblem!: ResearchProblem
    @Input() returnUrl!: string;

    form!: FormGroup;

    parentEntityControlName!: string;

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
     * Get id value of
     * selected parent entity.
     */
    private getParentEntityId = () =>
        this.form.controls["parentEntityId"].value;


    /**
     * Get value of selected parent
     * entity type.
     */
    private getParentEntityType = () =>
        this.form.controls["parentEntityType"].value;

    /**
     * Initializes form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            academicCommunityContributionPossibility: new FormControl('', Validators.required),
            categories: new FormControl('', Validators.required),
            parentEntityType: new FormControl(EntityType.Company, Validators.required),
            parentEntityId: new FormControl('', Validators.required)
        });

        this.sharedService.setParenEntityType(this.getParentEntityType());
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            title: new FormControl(this.researchProblem.title, Validators.required),
            description: new FormControl(this.researchProblem.description, Validators.required),
            academicCommunityContributionPossibility: new FormControl(this.researchProblem.academicCommunityContributionPossibility, Validators.required),
            categories: new FormControl(this.researchProblem.categories, Validators.required),
            parentEntityType: new FormControl(this.researchProblem.parentEntityType, Validators.required),
            parentEntityId: new FormControl(this.researchProblem.parentEntityId, Validators.required),
        });

        this.sharedService.setParenEntityType(this.getParentEntityType());
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {

        console.log(this.form.value);

        if (this.form.invalid) {
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            return;
        }

/*        this.formType === FormType.Create ?
            this.createResearchProblem() :
            this.editResearchProblem();*/
    }

    /**
     * Connecting to research problem
     * service and sending form data to
     * create new research problem.
     */
    private createResearchProblem(): void {
            this.researchProblemService.createResearchProblem(this.getParentEntityType(), this.getParentEntityId(), this.form.value).subscribe(() => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'research-problem-successfully-created');

                    this.router.navigateByUrl(this.returnUrl).then();
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
            .editResearchProblem(this.researchProblem.id, this.getParentEntityType(), this.getParentEntityId(), this.form.value)
            .subscribe(() => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'research-problem-successfully-updated');

                    this.router.navigateByUrl(this.returnUrl).then();
                },
                (error) => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');
                })
    }

    /**
     * Method for triggering
     * change on parent entity
     * radio buttons.
     */
    changeParentEntityType () : void {
        this.sharedService.setParenEntityType(this.getParentEntityType());
    }

}
