import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormType} from '../../../shared/enums/form-type';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {SpecificKnowledgeService} from '../../core/services/specific-knowledge.service';
import {SpecificKnowledge} from '../../core/models/specific-knowledge';
import {RedirectType} from '../../../shared/enums/redirect-type';
import {SharedService} from '../../../shared/services/shared.service';
import {Category} from '../../../categories/core/models/category';

/**
 * Component responsible for
 * managing specific knowledge data. It
 * can be defined with different input
 * decorators.
 *
 * @param formType type of form action.
 * @param redirectType type of redirect action.
 * @param parentEntityId id of parent entity.
 * @param specificKnowledge data for managing.
 * @param returnUrl url to redirect user after form submit.
 * @param dialogId parent dialog form identifier.
 *
 */

@Component({
    selector: 'specific-knowledge-form',
    templateUrl: './specific-knowledge-form.component.html',
    styleUrls: ['./specific-knowledge-form.component.scss']
})
export class SpecificKnowledgeFormComponent {
    @Input() formType!: FormType;
    @Input() redirectType!: RedirectType;
    @Input() scientistId!: string;
    @Input() specificKnowledge!: SpecificKnowledge;
    @Input() categories!: Category[];
    @Input() returnUrl!: string;
    @Input() dialogId!: string;

    form!: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private sharedService: SharedService,
                private notificationService: NotificationService,
                private specificKnowledgeService: SpecificKnowledgeService) {
    }

    ngOnInit() {
        this.initFormGroup();
    }

    /**
     * Switch function depending on
     * form action type from input decorator.
     */
    initFormGroup = () => this.formType === FormType.Create ?
        this.initCreateForm() : this.initEditForm();


    /**
     * Initializes form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            categories: new FormControl('', Validators.required),
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            title: new FormControl(this.specificKnowledge.title, Validators.required),
            description: new FormControl(this.specificKnowledge.description, Validators.required),
            categories: new FormControl(this.specificKnowledge.categories.map(x => x.id), Validators.required),
            scientistId: new FormControl(this.specificKnowledge.scientistId, Validators.required)
        })
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
            this.createSpecificKnowledge() :
            this.editSpecificKnowledge();
    }

    /**
     * Connecting to specific knowledge
     * service and sending form data to
     * create new specific knowledge.
     */
    private createSpecificKnowledge(): void {
        this.specificKnowledgeService.createSpecificKnowledge(this.scientistId, this.form.value)
            .subscribe(() => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'specific-knowledge-successfully-updated');

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                    this.specificKnowledgeService.pingSpecificKnowledge(this.form.value as SpecificKnowledge);
                },
                () => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');
                })
    }

    /**
     * Connecting to specific knowledge
     * service and sending form data to
     * updated selected specific knowledge.
     */
    private editSpecificKnowledge(): void {
        this.specificKnowledgeService.editSpecificKnowledge(this.scientistId, this.specificKnowledge.id, this.form.value)
            .subscribe((response: SpecificKnowledge) => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'specific-knowledge-successfully-updated');

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                    this.specificKnowledgeService.pingSpecificKnowledge(response as SpecificKnowledge);
                },
                () => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');
                })
    }
}
