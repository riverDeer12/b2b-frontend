import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormType} from '../../../shared/enums/form-type';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {JobOffer} from '../../core/models/job-offer';
import {JobOfferService} from '../../core/services/job-offer.service';
import {RedirectType} from '../../../shared/enums/redirect-type';
import {SharedService} from '../../../shared/services/shared.service';
import {Category} from '../../../categories/core/models/category';
import {ValidationService} from '../../../shared/services/validation.service';
import {EntityType} from '../../../auth/core/enums/entity-type';

/**
 * Component responsible for
 * managing job offer data. It
 * can be defined with different input
 * decorators.
 *
 * @param formType type of form action.
 * @param redirectType type of redirect action.
 * @param companyId id of parent entity.
 * @param jobOffer data for managing.
 * @param returnUrl url to redirect user after form submit.
 * @param dialogId parent dialog form identifier.
 *
 */
@Component({
    selector: 'job-offer-form',
    templateUrl: './job-offers-form.component.html',
    styleUrls: ['./job-offers-form.component.scss']
})
export class JobOffersFormComponent {
    @Input() formType!: FormType;
    @Input() redirectType!: RedirectType;
    @Input() companyId!: string;
    @Input() categories!: Category[];
    @Input() jobOffer!: JobOffer;
    @Input() returnUrl!: string;
    @Input() dialogId!: string;

    entityType = EntityType.JobOffer;

    isLoading: boolean = false;

    form!: FormGroup;

    public get type(): typeof EntityType {
        return EntityType;
    }

    public get formActionType(): typeof FormType {
        return FormType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private sharedService: SharedService,
        private notificationService: NotificationService,
        private jobOfferService: JobOfferService) {
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
     * Initializes job offer form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            name: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            experience: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            education: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            specialConditions: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            applyMethod: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            additional: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            location: new FormControl('', Validators.required),
            deadline: new FormControl('', Validators.required),
            duration: new FormControl('', Validators.required),
            categories: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes job offer form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.jobOffer.name.translations.HR, Validators.required),
                    EN: new FormControl(this.jobOffer.name.translations.EN, Validators.required)
                })
            }),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.jobOffer.name.translations.HR, Validators.required),
                    EN: new FormControl(this.jobOffer.name.translations.EN, Validators.required)
                })
            }),
            experience: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.jobOffer.experience.translations.HR, Validators.required),
                    EN: new FormControl(this.jobOffer.experience.translations.EN, Validators.required)
                })
            }),
            education: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.jobOffer.education.translations.HR, Validators.required),
                    EN: new FormControl(this.jobOffer.education.translations.EN, Validators.required)
                })
            }),
            specialConditions: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.jobOffer.specialConditions.translations.HR, Validators.required),
                    EN: new FormControl(this.jobOffer.specialConditions.translations.EN, Validators.required)
                })
            }),
            applyMethod: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.jobOffer.applyMethod.translations.HR, Validators.required),
                    EN: new FormControl(this.jobOffer.applyMethod.translations.EN, Validators.required)
                })
            }),
            additional: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.jobOffer.additional.translations.HR, Validators.required),
                    EN: new FormControl(this.jobOffer.additional.translations.EN, Validators.required)
                })
            }),
            location: new FormControl(this.jobOffer.location, Validators.required),
            deadline: new FormControl(new Date(this.jobOffer.deadline), Validators.required),
            duration: new FormControl(this.jobOffer.duration, Validators.required),
            categories: new FormControl(this.jobOffer.categories.map(x => x.id), Validators.required)
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {

        this.isLoading = true;

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Warning,
                    'correct-validation-errors');
            this.isLoading = false;
            return;
        }

        this.formType === FormType.Create ?
            this.createJobOffer() :
            this.editJobOffer();
    }

    /**
     * Connecting to job offer
     * service and sending form data to
     * create new job offer.
     */
    private createJobOffer(): void {
        this.jobOfferService.createJobOffer(this.companyId, this.form.value).subscribe((response: JobOffer) => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'job-offers.successfully-created');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.jobOfferService.pingJobOffers(response);

                this.isLoading = false;
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');

                this.isLoading = false;
            })
    }

    /**
     * Connecting to job offer
     * service and sending form data to
     * updated selected job offer.
     */
    private editJobOffer(): void {
        this.jobOfferService.editJobOffer(this.companyId, this.jobOffer.id, this.form.value)
            .subscribe((response: JobOffer) => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'job-offers.successfully-updated');

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                    this.jobOfferService.pingJobOffers(response);

                    this.isLoading = false;
                },
                () => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');

                    this.isLoading = false;
                })
    }
}
