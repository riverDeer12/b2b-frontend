import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormType} from '../../../shared/enums/form-type';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {SpecificKnowledgeService} from "../../core/services/specific-knowledge.service";
import {SpecificKnowledge} from "../../core/models/specific-knowledge";

@Component({
    selector: 'specific-knowledge-form',
    templateUrl: './specific-knowledge-form.component.html',
    styleUrls: ['./specific-knowledge-form.component.scss']
})
export class SpecificKnowledgeFormComponent {
    @Input() formType!: FormType;
    @Input() specificKnowledge!: SpecificKnowledge
    @Input() returnUrl!: string;

    form!: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
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
            scientistId: new FormControl('', Validators.required)
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
            categories: new FormControl(this.specificKnowledge.categories, Validators.required),
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
     * Connecting to category
     * service and sending form data to
     * create new specific knowledge.
     */
    private createSpecificKnowledge(): void {

        const scientistId = this.form.controls['scientistId'].value;

        this.specificKnowledgeService.createSpecificKnowledge(scientistId, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'specific-knowledge-successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }

    /**
     * Connecting to category
     * service and sending form data to
     * updated selected specific knowledge.
     *
     */
    private editSpecificKnowledge(): void {

        const scientistId = this.form.controls['scientistId'].value;

        this.specificKnowledgeService.editSpecificKnowledge(scientistId, this.specificKnowledge.id, this.form.value)
            .subscribe(() => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'specific-knowledge-successfully-updated');

                    this.router.navigateByUrl(this.returnUrl).then();
                },
                (error) => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');
                })
    }
}
